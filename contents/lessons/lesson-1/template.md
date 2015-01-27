---
title: Lesson 1
author: the-wintersmith
date: 2015-1-28 15:00
template: article.jade
tags: {
  'html': {
    'label': 'html',
    'icon': 'fa fa-html5',
    'data' : ['html','head','title','body']
  }
}
---

#Setting up the HTML template

* [Intro]()
* [Editors](editors.html)
* [HTML Template](template.html)
* [Blocklevel](blocklevel.html)
* [Classwork](classwork.html)
* [Homework](homework.html)

All HTML pages are based on the same HTML template that will be used to create every HTML going forward.

As we talked about earlier we can nest tag within one another and we will be doing that here.

##Version of HTML
Over the years there have been many different versions of HTML.  Starting with HTML 1 we are now on HTML 5.  To use any version of HTML you need to tell the browser by setting the DOCTYPE.

The DOCTYPE will be the very first line of your HTML document and tells the browser.  In fact the DOCTYPE is not part of HTML at all.

In the past a DOCTYPE was very complicated and could take up to two lines of code to define everything.  With HTML5 the DOCTYPE was simplified greatly to just one very simple line.

`<!DOCTYPE html>` or `<!doctype html>`

The two are the same and can either can be used.

##HTML Template

Once the version of HTML is set we need to build the template.

`<html>` - defines the start and stop of HTML.  All other HTML tags will be nested within the `<html>` tag.

`<head>` - defines the start and stop of the head section.

**Notes about the `<head>`**

* `<title>` - defines the title of the document that appears in the toolbar or tab and should be child of the `<head>`
* Head is used to define information for the page but not the content of the page.
* All CSS and JavaScript should be placed within the `<head>`.

`<body>` - defines the start and stop of the body section.

**Notes about the `<body>`**

* All page content should be placed within the `<body>`
* Make sure you put the content in the body sometimes people mistakenly put the content between the `<head>` and `<body>`.  The content my display but may not be styled or function correctly.

## The Template

	<!doctype html>
	<html>
	<head>
		<title></title>
	</head>
	<body>

	</body>
	</html>

[Download a copy of the template](template.txt)




