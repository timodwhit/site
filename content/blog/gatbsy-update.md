---
template: post
title: "Was Gatsby the right choice?"
slug: gatsby-update
date: "2023-01-08T17:01:00Z"
description: "I just want to manage my content as markdown and for the rest to just work"
category: dev
---

## Recap

This site is static html hosted using Github Pages using Gatsby as the generator. You can find the code here: 
[https://github.com/timodwhit/site](https://github.com/timodwhit/site). Is the code pretty? No. Is the Gatsby 
config correct? It compiles. Do I have too many packages? Yep, sure do. Do I care? I may.

## Updates

This morning I wanted to post a funny little thought about caring for an infant. It has been long enough (2 years+) and a lot (probably all) of the 
node packages needed updating. In addition to that, during that time TravisCI (used to compile the gh-pages branch) deprecated their free tier and 
I was no longer able to auto deploy. 

So things I did: 
1. Install node-check-update and update all modules blindly. (45 mins)
   
   - Was this smart? No. 
   - Do I recommend this for a true production site? Hell no. 
   - Do I have time to manage all those dependencies on my personal fucking blog?! GOD NO! I barely have time to shower.
1. Switched to Github Actions (15 mins)

   This was surprisingly smooth. Github has a prebuilt action for Gatsby which auto-detects yarn and deploys to the correct 
   branch in around 2-3 mins. Good luck, Trav.

## Notes
1. My setup requires way too many packages. Probably could be pared down but I don't have any desire or time to go through and figure out 
   which dependencies are used and why. #technicalDebt
3. I really like writing blogs in markdown and will likely have access to github for a long time.
4. I just want a simple markdown solution to post thoughts and this works well enough (and is free)
5. It doesn't cause me much stress to write (which is the easiest way to keep writing for me)

So was Gatsby the right choice? Sure. For me it works well enough and the complexity/ease of developing are already done. Updating node packages though, when will it stop?!
