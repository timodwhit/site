---
template: post
title: "Stop using SASS. It isn’t needed anymore."
slug: stop-sass
date: "2018-06-18T16:30:00Z"
description: "Do you really need that complexity?"
category: dev
---

Does that sound like clickbait, sure. Is it true, yes!

## Backstory

I am a Drupal developer and have used SASS a fair amount. I have actually given talks on how to use SASS and at one point was maintaining a SASS starter template and a Drupal theme that used a complex partial structure.Further, I bought SASS hook line and sinker as the way forward and the answer to short comings of CSS.

## Problem

Here’s the thing: I get your problems. Variables rock. CSS kinda sucks with them. It also sucks remembering what the HEX color of the f-ing green that is used in 5 places, but a really critical five places.

But the big question are: Do you need what your doing? Does SASS empower the platform or does it just empower you? Is there a difference?

The answer: By using SASS you are being selfish. You are putting your development ease as the chief priority over the longterm maintenance of the platform.

I’m sorry, but you know it is true.

**Task**: Go back to a project you worked on 3 years ago and try to make a small sass edit.

I’ll wait… Still waiting… And still waiting…

During this time, you have:

1. fixed all the libraries that have deprecated or have dependencies updated.
1. Fixed all the issues with the node version or ruby version you are using
1. tried to remember which partials do what
1. Said “fuck” a lot of times because you can’t remember the variables and what they do and you have to refer to that partial (you know the one, \_variables.scss)
1. Tried to make sure you weren’t breaking anything because you were kind of lazy (a chief proponent for you choosing SASS in the first place)

So here is my recommendation: Use small CSS files and attach wisely.

CSS is still how the web works.

SASS compiles to CSS. And it is likely to stay that way. You will not ship SASS to production and nor should you. You would be ashamed once you exposed your architecture to those who architect\*.

CSS has gotten good. It isn’t everything and writing it still is laborious. Nesting stuff is just so much better…

Attach CSS only where necessary, if you are attaching it to everything, you have an issue. There are global styles but there are individual styles as well. If you are displaying a teaser, load the teaser styles! Otherwise, keep them the away from the f-ing dom load.

Remember: You will not always maintain this project and nor shall you. Your team will change bits and pieces. Isolation and specification is critical in writing good CSS. Don’t make the front end look like garbage because you wanted to use nesting and variables.

\*Those who architect SASS are full of the same BS you are. They just have a strong opinions and maybe a louder voice.
