# FFXIV: Glamour Grabber

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Illustrations](#illustrations)
  - [Install + Setup](#install-+-setup)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges](#challenges)
  - [Improvements](#improvements)
  - [Project Specs](#project-specs)

## Abstract

This "Glamour Grabber" app is a project built over a long weekend, as a demonstration of what I've learned so far about React and React Router. It's meant to quickly let you search for a character in the hit MMO *Final Fantasy XIV* and pull up a list of their current equipment (including any "glamours" that equipment may be under). If you see someone with a cool outfit while you're running a dungeon, why not quickly look up their *fashionable hat* or their *adorable boots* so that you can see about acquiring some for yourself when you've got a free moment?

(And sure, that's something you can do on the game's official site -- but this is streamlined, and works great on mobile!)

## Technologies
  - Javascript
  - React
  - React Router
  - Cypress
  - HTML 5
  - CSS

## Illustrations

![GIF goes here](ffxiv-gg.gif)

## Install + Setup

[Visit the deployed site!](http://newertkrocker.github.io/ffxiv-glamour-grabber)

To run locally:

- Run `git clone git@github.com:NEwertKrocker/ffxiv-glamour-grabber.git` in your terminal
- `cd ffxiv-glamour-grabber`
- Run `npm install` to install all dependencies
- Run `npm start`
- The project should open in your browser!

## Contributors
  - [Nate Ewert-Krocker](https://github.com/NEwertKrocker)

## Wins
  - This project really helped me to feel comfortable with React and React Router.
  - It was a good opportunity to practice designing component architecture and experimenting with hooks.
  - I was able to implement localStorage support, so the site will hold on to your "shopping list" between site visits!

## Challenges
  - It took a little doing to figure out how to make React's state capabilities and localStorage to play nicely with each other, but I got there.
  - I wasn't able to implement some of the extension features that I had hoped to, because the weekend wasn't quite long enough!

## Improvements
  - Items can still be "selected" on the "Saved Items" page, even though it doesn't do anything functionally.
  - I'd like to add links to the item pages on the official Eorzea Database so app users can easily figure out how to obtain the item for themselves!
  - Similarly, a link to the item's listing on Universalis.app would be another useful addition.

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).
