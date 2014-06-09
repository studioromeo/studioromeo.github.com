---
layout: post
---

<a href="//www.youtube.com/embed/dMudLAYp7WY" class="video" style="padding: 0; display:block; height: 365px;">Play</a>

So I just wanted to run through how I envisage anchor working with Laravel.

So we've got a basic directory structure here

* We've got composer.json, we've got an app folder which contains all the configuration, storage for things like
session & cache and language files.
* Bootstrap which bootstraps our application.
* We've got a public folder which contains our themes and usual front end asset kind of things like favicon and robots.txt.
* And we've got artisan and obviously composer.json.

So taking a look at this composer.json file we've got the name of the application and it's requirements.
Basically what this file is it's like an instruction booklet for composer, so it's basically saying this application
requires Laravel and anchor.
Then after that it has a script section that says post install I want you to run these commands.

What we need to do first is set up our database so if we call it `anchor-demo`.
Cool then if we go to app/config/database.php and lets just add the database name, call it `anchor-demo` cool.
Laravel also comes with support for postgres, sqlite & sequel server which is quite cool.

Right ok, to install anchor we simply need to do `composer install`
And that will look at the composer.json file and it will look at all its dependencies for Laravel and anchor and it
will attempt to install them.

Now especially when I'm screen casting this can take a while but bare with me, in the meantime I will try and explain a
little bit more about these folders.

So we've got in the app folder our config and this contains a load of config files.
Most of them are pretty standard stock Laravel config files and each one comes with a bit of help text which says what
each setting does.

So it's quite handy like that, for example this session say that it supports native, cookie, database, apc, memcached,
redis and the array which is the array is literally just an php array!

So thats our config folder the only notable one here is the view now the view has been customised slightly.
What I've done is set a path to the theme directory so basically what that is saying is telling anchor when a view is
constructed, look in here first.

So we've got our themes folder, and heres our theme.
This is just a standard @idiot default theme, so it has your article page, functions footer, theres nothing
revolutionary there.

Above it we've got a packages directory, this is where the assets from the anchor/core...oo looks like composer has
just finished installing, lets just have a look.

Yep here we go so this is the output of composer install, so as you can see it's installing anchor/core and it's
grabbing that from Github because it's currently not registered with packagist, theres no versions on it yet so
it's all latest and greatest from the master branch.

And then we're installing doctrine, symfony, a few other bits and bobs - these are all the Laravel dependencies.
Generating the autoloader, and then it's running the migration table and all the migrations and then it's publishing
the assets.

Yea so as I was saying this packages directory because the public folder is the web root usually.
When I request the css file for `anchor/core`, admin.css for example which is stored in
`vendor/anchor/core/public/css/admin.css` because the web root is actually in `/public` it can't access that css file.

So what `asset:publish` does is it basically copies over the public directory and names it `anchor/core` and then
sticks the contents under that folder.

The reason why it does that is so I have a consistent naming convention that I can use when i'm creating the views
and i'm loading in my css file.

Right, so that should mean if I head over to sequel pro we've got all our database tables there.
Er ok so if we go to terminal and we type in `php artisan serve --port=8080`.

Right so Laravel development server started. So if we type into our browser http://localhost:8080/admin/posts.
And here we go, here's our anchor install so we can create a new post and call that hello world and its created
fine it shows up in the database. So yea this is a living breathing anchor install.

So say some time passes and we need to update anchor. It's quite simple all we do is composer update and that will
look at the composer.json file again and check what versions we have already installed and update any that need updating.

And the great thing about that is it only replaces folders inside this vendor directory so any customisation done in
the app directory wont be unaffected and also means you won't have to do any manual copying and pasting like the current
anchor build.

OK so that's basically it I'm not sure if this is the best way of doing it.
It's still very much in the beta phase as it were but we'll see how it goes as I start building more of the application.
It may turn out to be a red herring but first impressions have been pretty good.

So this is me guys, it was just a quick demo.<br/>
I hope you like it and I'll see you later.
