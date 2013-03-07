---
layout: post
title: Suit and Tie
---

So I realise it's been a fair while since my last post here, but I have been busy...honest!

With 2013 (now in full swing) I wanted to repaint my little corner of the internet. I probably did it out of habit, I tend to get the paint & brush out during this time of year.

I liked my old colour scheme, it was a good footing and was leaps & bounds ahead of the blank page previous to it. But as with all initial versions there were a few problems.

![master]

The biggest by far was it made me feel like it was a little immature. I'm 22.333333.. years old now and I wanted something that reflected my age, both as a person and as an artisan.

It wasn't just a matter of maturity though, I also wanted to start adding imagery into my posts which my old design didn't seem to show off in a way that I preferred. On some sites a 1px border works well, but on mine it looked too bland, almost boilerplate.

##Fry

So in January I pushed my [first commit] to a new branch on github. I like to name my branches after characters on the Futurama series. This is probably not the most descriptive name for a branch but it gave me a giggle.

![fry]

It started out with Fry, which was a dark brown & green theme, this was definitely going in the right direction but the colours were just a bit too intense for me. The site had lost it's simplicity and was now relying on heavy box shadows & border radii.

##Farnsworth

I took inspiration from stripe's site (I love these guys) and combined it with a variant on the green from Fry to create my new design

And so Farnsworth was born? created? morphed? ... anyway this design was picked because:

1. It fixed all the problems that I had with the original site.
2. It's green. Who doesn't love green these days?

The new design also uses disqus now, disqus' code could be smaller so I slimmed it using my limited javascript skill.

{% highlight html %}
<aside id="disqus_thread"></aside>
<script>
	(function(d,t) {
	var c=d.createElement(t);s=d.getElementsByTagName(t)[0];
	c.async=1;c.src='http://[[YOURSITEID]].disqus.com/embed.js';
	s.parentNode.insertBefore(c,s)})(document,'script');
</script>
{% endhighlight %}

All in all I'm happy with this, and with some new plans on the horizon there should be some awesome looking posts coming out in the coming months.

I'd love to hear what you think over in the comments.


[master]: /img/2013/master.png
[fry]: /img/2013/fry.png
[first commit]: https://github.com/studioromeo/studioromeo.github.com/commit/66ede0afce1fe66ae699fa17738cd84db59f9c38