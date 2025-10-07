---
title: A Hack at the Hacknight
summary: My personal experience running an internal hack night for my work mates and what we built on the night
---

A few of my work chums wanted to put on a hacknight but initially it didn't sound too exciting because there wasn't any end goal to it. You just played around for a few hours and the went home when you eventually got tired & hungry.

This year I've been an attendee at the [simpleweb hacknights](https://simpleweb.co.uk/brands/simpleweb-challenge) and they've been great fun. There's live music, complimentary food (which is delicious) and even prizes to be won at the end of the night!

Inspired I wanted to try and make our hacknights as fun as theirs. So I hatched a plan and sat down with a few senior members of staff to discuss.

## The format

We sent out a [doodle](https://doodle.com/) poll asking staff to vote on what API tickled their fancy the most. Staff had a choice of these 5 API's:

- [NASA](https://data.nasa.gov/)
- [ONS](https://www.ons.gov.uk/ons/apiservice/web/apiservice/home)
- [Facial Recognition](https://market.mashape.com/lambda/face-recognition#!documentation)
- [Weather Forecasts](https://market.mashape.com/george-vustrey/ultimate-weather-forecasts)
- [Ordnance Survey](https://www.ordnancesurvey.co.uk/opendatadownload/products.html)

The poll was a close one with facial recognition beating the NASA api's by just a single vote.

Participants were encouraged to form teams of no bigger than 5. On the night we ended up with 3 teams – 4 people in each – each a good mix of disciplines from designer to developer.

There was only one rule; teams must use the chosen API in some form and after that they have free reign to do what they liked.

We decided to start the night after work at about 5:30pm and finish at around 8pm (although we didn't start until about 6pm).

![A developer in a red t-shirt points at a diagram while others watch](/img/2015/animal.jpg)

At the end of the evening we would all gather round and demo our work. To judge we handed out cards to each team to score each other out of 10 on the following:

- Creativity - How creative was their hack?
- Difficulty - How tricky was their hack to achieve?
- Idea - Was it a compelling idea?
- Polish - How well presented was their hack?

In the end if there was a tie break we would decide the winning team. We would announce it in our weekly highlights email.

## Snags

It wasn't all smooth sailing though, we definitely made a few boo boos on the night.

Our biggest issue was finding out about 20 minutes before the night was due to start that the facial recognition API we had chosen wasn't actually free.

![Facepalm Meme](/img/2015/doh.jpg)

This meant we had to scramble to find a new API which was free and offered similar features. Note to self always thoroughly test the API!

## The hacks

The teams still managed to create some awesome hacks through the night.

### Animal Team

![A wall with wireframe sketches on it](/img/2015/animal-wall.jpg)

The A(nimal) Team hadn't had time to prepare for the night, despite this they still created a prototype of an animal likeness application which accepted a photo and gave you stats on your age, gender and then showed you what animal you resembled most. I thought this was really neat and achievable hack given the time frame.

They scaffolded out their app using javascript to interface with the API so were able to create a working prototype very quickly.

### Hacknight Dream Team

![Two developers working on their hacks](/img/2015/hacknight-dreamteam.jpg)

Hacknight Dream Team, (cocky names aside) had an interesting idea to plot a users happiness over time by judging their smile. It would then draw a 'happiness chart' and show how your happiness changes throughout the day comparing you to the rest of the world.

Unfortunately they didn't manage to make a working prototype however they showed us an example of the API they were working on.

They used [Sails.js](https://sailsjs.org) which is a node.js mvc framework alongside with [MongoDB](https://mongodb.org) a JSON Datastore to track the users happiness over time.

### Face-a-rater

This team's plan was to ask users to make their best taylor face. For the uninitiated this is the taylor face.

![A black tie dressed man wincing at a sparkler](/img/2015/taylor.jpg)

They would then be scored on their likeness with 100% being freakishly identical. A leaderboard would see how your facial impression stacked up with the other users.

Their app used the [Ionic hybrid application framework](https://ionicframework.com) which lets you create rich mobile applications using web tech.

Unfortunately they didn't manage to make a working prototype but they did manage to create a PSD mockup in time for the demo.

## Conclusion

Overall the night was a success and I'm really grateful to everyone that made an effort to come along. It was awesome to see not just developers but designers also coming and working together to hack on something.

![A group of people gathered around a laptop](/img/2015/face-a-rater.jpg)

The night gave me an appreciation for just how much work organisers put into making these kinds of events happen.

I look forward to the next one!
