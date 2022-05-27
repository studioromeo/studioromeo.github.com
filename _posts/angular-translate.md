---

---



My day job involves working on an angular app that provides advice to medical professionals around the world. Because of this we need to provide the app in other languages so that users can navigate around ok.

Theres a few libraries out there that can do this. Two of the most notable being ngx-translate & @angular/localize. We went with angular/localize mostly because it was the official solution and did what we needed. ngx-translate would have been fine too but we didn't know how well it was maintained and it didn't solve any more problems for us

In recent angular versions Ahead of Time compilation has been encouraged as provides error reporting during the build process (handy) and is generally a bit faster than JIT (also handy).

The official docs do a good job of explaining how to enable and use translations in your own angular app but there was a hitch for us.

During building with AOT enabled angular will create entire copies of the app's codebase for each locale. This includes all the assets, css & javascript needed to run the app. For most this is fine because we'd put some web server config to direct the user to the appropriate copy and their browser would only download the assets it needed.

For a Cordova app like ours however because it's distributed this meant we'd have to bundle all the locale copies into a single binary and ask users to download the entire thing, even though they'd only use a small portion!

One way we could fix this would be to flip to JIT rendering where javascript evaluates each template as it's required, but this would be a step back in terms of error catching and speed :cry:



## Runtime translations

Thankfully theres a solution to this (although its not clearly documented).

As it turns out you can get angular to translate at runtime by using `loadTranslations()`. This needs a key: value object and ideally to be called as soon into the angular process as possible. 



It's worth noting that this won't allow language switching, once angular has translated something it doesn't go retranslate if the translations change. I guess if thats something you're looking for maybe thats the sign to check out ngx-translate or similar but angular/localize is for sure not your bag on this one.



- Angular apps can serve multiple markets and need translating



```
In the past our AJS project used angular-translate.

This requires a nested javascript object but this is confusing for non coders

We made a google spreadsheet which makes it easier. Essentially a key | value | value | value

We wrote a command that takes that csv and then converts it into the object angular-translate expects.

New angular made this process a bit more challenging as angular expects xliff type files which are a bit more involved. We'd need to switch to a proper translation SAAS to manage which would have been good but extra cost.
```



Problem: Angular AOT + @angular/translate copies the application into sub folders.

- Normal idea is that nginx config would direct the user to the right place
- Distributed code means that we'd be shipping copies of the app + all assets making the app package larger than it needs to be
- Want to keep AOT compilation



Can use ngx-translate - but would be a significant dependency changing how we write i18n in all our templates

	- uses pipes etc instead of i18n=



Solution: loadTranslations() exists which loads a key, value object. Undocumented really



- Note: by default uses a random translation key but thats no good for us so we write our translations with specific keys.



This loads translations into an object (quite basic), angular calls a `translate$1` method which searches the tranlation for 



Existing spreadsheet had dot noted keys with values.

Created a simple script to take that csv and make them into JSON



Writing translations:

Normal way but ideally set a specific translation key eg

```html
<p i18n="@@my.translation">Hello world</p>
```

Or in code by using `$localize` like so:

```javascript
const translation = $localize`@@:my.translation:Hello world`;
```

Can use angular to get these keys out into a json object by calling `ng extract-i18n --format=json` and then doing what you like. We don't tend to use this and instead manually add to google sheets but its useful if we're not sure what the value should be (because of placeholders)



Loading translations steps:



1. Get the users language from window.navigator.language and apply against a whitelist of supported languages (language service)
2. Create a APP_INITIALIZE service to get the translations using http service
3. load the translations into angular/translate using loadTranslations
4. ???
5. Profit





Cons with approach:

- Object key / value means xliff format a bit tricky, for us it was better because we use csv
- Imagine a slight performance decrease but hard to measure exactly
- No error reporting during build for missing translations
- Direct console.warn usage makes it hard to swap for another logger (though this maybe fixed by a PR? :thinking: )

