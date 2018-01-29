---
title: Lesson 5
lesson: Homework
author: Dan Hahn
date: 2/21/2018 15:00
template: article.jade
nav:
  Box Model: index.html
  Pseudo Class: pseudo.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Homework: homework.html
homework:
  lesson: lesson5
downloads:
  Starter File:
    file: homework-5.zip
    btn: primary
---

This week we are working using floats to display images and have the text wrap around it. 

## Getting started

Download and unzip the starter file.  

This file will have 

* HTML file
* CSS file
* Images folder with 3 images. 

## Adding images

The page is missing the images needed to display the content to the user.  

* Add image to the header (header.jpg) - add to header tag before the `h1` tag.

Each section of the article is missing the image related to the content.  Use the `figure` tag to add the an image (`img`). 

Add missing styles to the figure.  You will need to create two classes one for the image on the right and one for the image on the left.  

### On both classes add these styles 

```css
border: 1px solid ligthgray;
padding: 1em;
```

### Floating the images

While we are floating the images we will be applying all the styles to class on the `figure`.  

* Add `float` (right or left based on how you want to display the "image"
* Add `margin-right` or `margin-left`.  If you float right add `margin-left` so the text will not push right up against the `figure`

### Style the footer

The text in the footer needs to be displayed on the right side of the footer.   Try to use `float` and notice that the display breaks.  `text-align` will move the text within the contain to the right. 

