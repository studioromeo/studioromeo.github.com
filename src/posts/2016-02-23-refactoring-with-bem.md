---
title: Refactoring with BEM
summary: 3 years ago I put the finishing touches to my first design. We'll go over what I've changed since and where I hope to go next
---

It was around this time [3 years ago](/suit-and-tie) I was putting the finishing touches to this design.

Back then Jekyll didn't compile sass and since the design was quite simple I didn't feel the need for it, plus I'd probably forget to compile half the time anyway!

I wrote my css the old fashioned way, starting with the header and working my way down to the footer. It was great in the beginning but after a while a few drawbacks started to emerge:

1. No build process to minify and concatenate (I could have made one but then I would have just used sass)
2. High specificity caused clashes and made it easy to add bugs
3. Duplicated code for similar objects and redundancies

I had been meaning to tidy it up for ages but I just didn't know what to do. I was aware of [OOCSS](https://thesassway.com/intermediate/using-object-oriented-css-with-sass) & [SMACSS](https://smacss.com) but didn't understand them. Lately I've been getting into [BEM](https://getbem.com/) because it is a simpler concept
to grasp.

After doing a bit at work and also reading [about namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) I finally felt confident to try and refactor this :hankey:

I ended up with this [structure](https://github.com/studioromeo/studioromeo.github.com/tree/d2a28c0577fd0cac191ba1f9851f2b93f0134498/_sass) which I'm not fully convinced by but it's a vast improvement on what it replaces. It's still BEM but with namespaces to add a bit more information.

These aren't just namespaces plucked out of thin air either, they explain how explicit the styles are. Starting from generic wide ranging styles to more focused styles that only affect a handful of elements.

-   **Settings & Tools**: Contains sass variables and my animations
-   **Generic**: Resets, spacing and box models
-   **Base**: Element selectors only, no classes here
-   **Object**: Inspired by the media object in OOCSS this contains code shared across two or more components. Purely class selectors from here on
-   **Component**: Main parts of the design, highly specific code that affects very few html elements

Finally theres trumps which is the most explicit layer. Use of `!important` here is OK since I know that this is the final layer of specificity.

This format is nice to work in because I know what impact my changes will have. A useful tool I borrowed from csswizardry was his debug stylesheet which outlines different components on the page
which is handy.

![Site with coloured outlines for different classes](/img/2016/debugging.jpg)

As an added bonus naming my files like this makes it really easy to find what I'm looking for. I guess the only downside to this technique is knowing what to call things!

Additionally I added [scss-lint](https://github.com/brigade/scss-lint) to the CI to make sure that my code stayed consistent which while annoying at the time is really handy. I just had to spend some time making sure I had it set up with the correct rules.

Feel free to nose around the [pull request](https://github.com/studioromeo/studioromeo.github.com/pull/25). Thanks for reading!
