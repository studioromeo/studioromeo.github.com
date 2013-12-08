---
layout: post
---

<iframe id="test" width="100%" src="//www.youtube.com/embed/nwSwPYKPgEY?rel=0&showinfo=0&enablejsapi=1" frameborder="0" allowfullscreen></iframe>

Hi Guys, hope you're well!<br/>I've just been cracking on with coding ~~laravel~~ anchor in laravel.

I must confess I got a little bit ahead of myself. I've been meaning to do a screencast on each section of my progress
but unfortunately I kind of forgot to do that and pushed ahead anyway! <br/>But no matter, I'm going to double back and
go through each of my steps that I took up to this date.

First step I took was migrations so I'm going to go through that today.<br/>
OK so, If you guys have never seen a migration before this is what one looks like in Laravel.

Basically what a migration is; is it's a way of defining your database schema over time.
So you know how you write an app and in a couple of months time the database might change (the schema might change).
For example this title might become a longer title so it may need to become a text field.

So the idea of migrations is you can programatically upgrade or downgrade the database depending on what you want
to do at the time.

This function is called `up` it stands for upgrade (another way of thinking about this is this section here is moving
forward in time) so this is Version 1.<br/>You may have another one in future that edits the post table and that will
create Version 2 of the database.

So what we've done is said we're going to create a posts table and then we're going to put inside of it a load of fields.
So we've got things like a title which is a string, text for a description, timestamps, enum for a status with all
its different statuses, comments, all sorts of things.

Then further down we have a function called down or downgrade (or going back in time as I like to think about it) and that
basically drops the post table.

So if I run over to terminal now, so if I type in php artisan migrate lets see what happens.

So it said migration has been completed sucessfully and its then done a load of migrations in green text with a
load of white text to say what it has migrated. So for example we have got `2013_11_06_create_post_table`, now that
refers to this file here, and we have all the other files too.

So lets take a look at our database, ok it looks like we havent got anything in it but if I refresh now we see theres a
load of tables. So if we briefly take a look at that post table, now does that look a little bit familiar?

OK so we've got our ID, title, slug, description, html, css, javascript, timestamps, author, category, status, comments.
They're all in there they're all the correct types and set appropriately with the right primary key ect ect.
So that's perfect.

But we haven't demonstrated this 'down' section just yet so I'll run through that with you.

So to go backwards we can do `php artisan migrate:rollback`, and that says it rolls back all of those migrations that I
have done.

As you can see there's only one table left the migrations table, which I forgot to mention the migration
table basically keeps track of where we are (where the database is in relation to the migrations), so for each one of
these it'll list all the filenames and whether its done it or not.

And thats basically it for migrations, If you'd like learn more I recommend heading over to [laracasts].
There is a migrations lesson - [migrations decoded], Jeffrey Way offers a fantastic explination of migrations,
much better than I've put accross this has just been a quick overview, definitely recommend checking that one out.

Ok for now guys this is me.

I hope you have a gooden but for now see you later!

[laracasts]: http://laracasts.com
[migrations decoded]: http://laracasts.com/lessons/migrations-decoded
