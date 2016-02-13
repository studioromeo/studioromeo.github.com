---
layout: post
title: A small tool to help look after your eyes
---

Both my parents have to wear glasses and a number of my friends do too and while it's recommended that we all take a 5 minute break for every hour we work at a computer very few of us really do.

There are a bunch of mac apps out there that do the job, one that comes to mind is [Time Out](http://www.dejal.com/timeout/). While it does the job it did get a little annoying after a month or so. Instead I decided to use my screens brightness to dictate when I should take a break.

After some searching I found a great [little terminal app](http://hints.macworld.com/article.php?story=20090901021817717) which wraps OSX's brightness settings into something I can work with.

First I created a bash script **/rest/app.sh** which will handle dimming the screen and restoring it.

```bash
#!/bin/sh

# Get the original brightness
BRIGHTNESS=`/rest/brightness -l`;

# Dim the screen to it's lowest setting
`/rest/brightness 0`

# Stop for 5 minutes
sleep 300

# Back to work!
`/rest/brightness ${BRIGHTNESS:60:8}`
```

Now we need to run the script every hour, we can do this by creating a cron job. Open terminal and type

```bash
crontab -e
```

This opens up the users crontab from where we can add our cron job. `*/60` basically means every 60th minute. So it should run on the hour every hour.

```
*/60 * * * * sh /rest/app.sh
```

Voila! The screen should dim on the hour and then return to normal brightness 5 minutes later.

Time will tell whether this is better but so far I'm liking it!

If you guys have any ideas on how to make it better you can [contribute here](https://gist.github.com/studioromeo/5454975)
