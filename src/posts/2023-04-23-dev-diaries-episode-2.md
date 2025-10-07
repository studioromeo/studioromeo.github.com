---
title: Lessons Learned the Hard Way with Dependencies
summary: Learning the hard way that sometimes it's better to build your own than to struggle with existing tools
tags:
    - Dev Diaries
    - Angular
    - Mobile App
---

We're working on adding OpenID Connect to the app. Luckily for us we only needed to create a client rather than the server, that was being handled by another team. Theres a saying in software, don't roll your own security. And for us that naturally lead us to looking for a dependency.

---

We also noted that OpenID certifies packages for compliance to the spec, pretty handy! We found two for Angular that we thought would work. The first one we tried was a bit of a dud for our cordova setup so we flipped to the other. This worked well and we managed to get the flow to work.

OpenID comes with tokens, these are used to talk to a protected API. They can expire and if they do we can exchange for a new one. It was this exchange task that was the beginning of our problems. Our issue was trying to make the exchange process work with a device that maybe offline for long periods of time. The plugin would simply keep trying every few seconds which caused our logger to fill up with lots of failed requests.

We tried everything to keep the dependency. We tried patching the dependency using something like patch package but this wasn't possible because of the way angular packages are precompiled, perhaps it's possible but that is beyond my skills. We tried treating it like a black box, changing the responses from requests to blank ones. This also didn't work. We even looked at alternative dependencies but they also had issues one way or another.

In the end we were left with only one option. Write our own. In some ways after going down that rabbit hole I'm kinda glad. Writing the code ourselves is daunting in the sense of doing it wrong bu at least its our code, we have the ability to fix it if we need.

What I've learned from this process is that you should use dependencies, but maybe with a little care and nuance which might not always be apparent at the time.

Theres a lot that some dependencies offer. They're often authored by multiple people over a period of years so the code is usually quite well battle tested across a bunch of projects and contexts. This is useful as it decreases the risk of bugs. Sometimes they can also be certified by an external body, for example OpenID projects can be certified for compliance against the spec which is what drew us to using a dependency.

But be careful. It's worth taking the time to look at the dependencies available to you. Look at the common things like:

- _How many authors are there?_
- _Whats the activity like on the repository?_ <br/>Is there a lot of recent action or has it been untouched for years? This might not be a bad thing if the dependency does what it needs to and has no bugs but it could also be a sign of a dead project.
- _Whats the license like?_ <br/>Can you even use this dependency? Is there a fee you need to pay?

There are also more nuanced things to look at, personal to you, your team & project.

Check out the code. How much of what it does is relevant to your needs? For example our dependency included code for the entire OpenID Connect spec. We only needed the Authorization Code flow so a lot of the code in the dependency was redundant. During debugging this meant we had a lot of irrelevant code to comb through to understand what was going on.

If you do need to tweak, can you? Without it being a bit of a pain in the bum. Some dependencies that are a bit larger make use of adapter / strategy patterns that allow you to write custom code that adheres to an interface. If you can't, is it patchable?

Lastly should you need to switch to something else, what options are available to you? Are you spoilt for choice or is it slim pickings? If its the latter how confident are you in being able to replace it with something you've written?

As for us, we're on the road towards writing our own package. It's a slow process but we're getting there, cobbling together knowledge from specs and other projects to build something that works for us.

Hopefully this ends up turning out okay...
