---
title: Lesson 4
lesson: Including a CSS File
author: Dan Hahn
date: 10/11/2017 15:00
template: article.jade

nav:
  Font Properties: index.html
  Text Properties: text.html
  Include CSS File: include.html
  Borders: borders.html
  Padding and Margin: padding-margin.html
  Homework: homework.html

---

To include a css file in an HTML the first thing you need is a .css file.  You can create a .css file the same way you create a .html.  Go to file save as and give the file a name and add .css as the extension.

## Link Tag

The link tag is an HTML tag that is added within the head of a document.  This tag has three attributes.

* `href` – the location of the file
* `rel` – set to stylesheet

### Example


```HTML
<link rel=”stylesheet” href=”filelocaiton.css”/>
```

---

## @IMPORT

`@import` includes a `.css` but does it with in CSS itself.  With `@import` one css file can include another file.

### Example

```HTML
<style>
	@import url(filename.css);
</style>
```

You can also include from within a `.css` file by adding the `@import` at the top of the file.

```CSS
@import url(filename.css)

body {
	font: ...
}
```
