# Pots, Pans and Dependencies. Why regularly updating matters.

I'm a serial procrastinator. It's true, I'm so good at procrastinating I'll procrastinate about procrastinating. Theres not a thing I won't put off for days, weeks or months, even if it's in my best interests to just do the thing. I'll give you an example. When I moved into my house I was an excited young 23 year old. The kitchen in the house is quite small and basic, theres enough room for a stove, a chopping board and a sink. While perfectly functional it omitted something I'd never appreciated in my life up now. The dishwasher.

Being an excited 23 year old I had no motivation for washing up (and what 23 year old does?), that would only cut into critical being horizontal watching crap on tv time. No no that won't do. The days went by and the dishes mounted up, and up and up. I'd get pretty creative working out the most efficient way of using the remaining clean plates, saucepans and cutlery to really draw out the time before I had to face the harsh reality of washing up.

![](/Users/robertrhoades/Desktop/1414228934167_Image_galleryImage__Ruckas_Videograbs_01322_.jpeg)

While scrubbing away at the hardest known substance in the universe ([dried on Weetabix](https://www.reddit.com/r/britishproblems/comments/26su24/i_accidentally_let_some_weetabix_dry_on_a_bowl/)) I'd curse myself for not doing this sooner. Why did I leave it until the very last moment, when I could have just rinsed this bowl under the tap and done the job in a fraction of time with minimal effort. 

Damn my past self.

This brief introduction to my domestic failings brings me onto strategies for updating dependencies. And you’ll be surprised to know theres a lot that it has in common with washing up. I won’t bore you with why updating is important, you all know that score by now. So in general theres a few ways we can manage updates.

## The Rental

Ignore it and then buy all new stuff. Keep churning out the features until the project inevitably crashes and burns and then rebuild from scratch in about 3-5 years time. Repeat ad infinitum.

Sounds shocking but this quite a common pattern for software and a lot do this. It can be a legitimate strategy as long as everyone has bought into this idea that the softwares lifespan is short and there will be a rewrite coming up but there is a cost.

Theres the usual technical complexities around migrating of data, users etc but a bigger issue is that you're effectually stuck still redeveloping the existing feature set. Meanwhile your competitors are iterating themselves into a better offering and theres nothing you can do about it.

## The Spring Clean

Ignore it for as long as you can and then do a big update all the things sesh, probably around every 6-12 months.

Like leaving the dishes until you have to wash them up this is the worst of the bunch.

The infrequency means the jump between versions will likely be very large in terms of change and also have a large surface area (as it's likely most if not all the dependencies will need to be updated). Incompatibilities between dependencies will be rife and it'll generally be a bit of an unpleasurable experience. Should anything go wrong it'll be very hard to take a step back because the change set was so large.

These efforts often get dropped as we realise that the change is larger than we have time for and so we need to prioritise the work. It's likely that upgrading isn't valued in the team and so the spring clean can morph into the rental, except no one has agreed that the software will be trash in a few years time. Cool cool cool cool cool cool cool cool cool cool cool!

## The Spruce

This is my favourite approach but it takes discipline .

Constantly be checking and updating for updates. Dedicate time to doing this each sprint and keep the updates down.

By upgrading constantly and early on it gives you a heads up on any upgrades that may be problematic. Any problems that do arise are a simple revert away. You're doing it little and often so chances are there won't be many updates to process and the jumps will usually be minor which makes the whole process a lot easier to deal with thus helping you do it more often, yada yada yada.

Discipline is important here otherwise this morphs into the spring clean (which then morphs into the rental). It's no good to say oh "I'm too busy right now I'll do it another day", no thats no good. It must be done and it must be done now, otherwise our upgrade won't be micro, it'll be macro and we'll lose any benefits of doing this on the regular.

By keeping the dependencies up to date, theres little reason to do a big rewrite every 3-5 years. Instead that time is spent doing lots of micro adjustments every day, leaving the company able to adapt to the changing market without being stuck.

## The Dishwasher 🙌 

Github's Dependabot is your pal when it comes to doing a spruce, you can tell it to give you a set amount of pull requests at any one time and it'll go through the hard work of updating the package lock file, raising the pull request, documenting the change history etc. Its basically a dependency updating dishwasher!

Combine this with a sweet set of tests that run on CI and you've got a pretty good automated way of raising and testing upgrades.

It's not perfect though, for some projects (eg Angular) code migrations are run as part of the update process and Dependabot won't run those (theres [calls for it](https://github.com/dependabot/dependabot-core/issues/1296 ) to be able to do this but we're not there yet). But for the most part Dependabot will usually be the most productive member on the team...eep!

![](/Users/robertrhoades/Desktop/Screenshot 2022-04-04 at 09.22.04.png)

If you want to learn how to setup Dependabot theres a guide on how to do this on [Github](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates), or check out the [BMJ repo](https://github.com/boxuk/bmj-best-practice-app/blob/master/.github/dependabot.yml) for an example of this in the wild.

**Summary**

Dishwashing & Dependency management needn't be difficult if we put in place the systems to do it regularly. Automated systems like Dependabot and CI can make this process a lot easier to manage. Keeping up to date 

Now if you’ll excuse me, I’ve got some dishes that need scrubbing 🧼 