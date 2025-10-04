---
title: A day in the QA Maze
summary: As a developer its easy to forget how your actions affect other roles. In this post I go over my experience shadowing a QA for the day
---

This week is a week that every dev dreads in one way or another. In my opinion going live is never a stress free task no matter how silent it is. In fact I'm pretty tense just writing this article and there's absolutely nothing that could go wrong (I kid myself, it could totes go horribly wrong in ways I couldn't possibly imagine but onwards and upwards?).

But it is also a really interesting time, you learn a lot about yourself at this time. In my case today I learned an appreciation for a profession I immaturely felt wasn't as hard as development. But first let me explain how the system works.

Before I can complete a ticket it must pass a few QA stages. Upon finishing an item of work all the code goes through a Travis CI build process. This step automatically checks that the code is formatted correctly and that all the unit tests that have been written pass. Round one complete!

Provided all is good one of the other developers on the team will take a look through and see if anything pops out and that the design of the code is correct.

Once another developer as given their seal of approval the PR is merged and the QA env is updated. It's at this stage that us devs hand over to the QA team to thoroughly test against the acceptance criteria in the ticket.

It's this that I thought was trivial, after all the work is done right? All they have to do is tick boxes and say yes that's fine. Easy right? No I couldn't be more wrong.

For a dev it's easy to know the story behind a ticket, what everyone said, when, and how that relates to other tickets. After all in order to implement it we have to delve into the specifics and down and dirty with the criteria.

A QA has none of this. They have to trawl through the history of the ticket searching for the simple answer which is usually "What the fudge am I testing here?!"

Sometimes the history can be so in-depth and convoluted that a simple changing of the default option on a select can take hours to QA. This sucks, it really really sucks and it makes me sad (even cry) that this is can be true.

So I started thinking last week "there must a way I can help my friends! What can I do different to make a difference no matter how small" - cheesy right? I hate cheese (including the dairy version) but that's genuinely what I said :\

Today I was working with Sian who hasn't been on the project for a while. I decided to try and impart some knowledge in each ticket by summarizing the long and sometimes confusing history into a "sup dawg, this is what's going down"™ comment. It was inspired by the same comments QA send back to us when something is not right, it contains the following structure:

1. Quick brief summary of whats wrong
2. Steps to reproduce
3. Expected Result
4. Actual Result

This is great because it tells the reader what's wrong, how to get it, what to look for and what it should be. That's like gold dust (or a massive surprise lego set) right there, they've just saved me having to figure out all this myself.

It's too early to say whether it makes much of a difference, I haven't asked anyone for feedback because it's a bit uncool really but I'll be interested to see what happens. Heck even if I save myself some head scratching it'll be worth it!
