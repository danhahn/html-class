---
title: Lesson 1
author: the-wintersmith
date: 6/3/2015 15:00
template: article.jade

tags: {
  'html': {
    'label': 'html',
    'icon': 'fa fa-html5',
    'data' : ['p','h1','h2','h3','h4','h5','h6', 'br', 'blockquote', 'ol', 'ul', 'li', 'div', 'section', 'article', 'header', 'footer']
  }
}

---

#Block-Level Elements

* [Intro]()
* [Editors](editors.html)
* [HTML Template](template.html)
* [Block-Level](block-level.html)
* [Inline](inline.html)
* [Classwork](classwork.html)
* [Homework](homework.html)

Block-Level elements are used to define the structure of the HTML page. Block-Level elements will define and area on the page or force content on its own line. Block-Level elements must be the outermost elements but can be nested within each other. The only exception to the rule is the paragraph tag which needs to be the innermost Block-Level elements.

##Structure Tags - Block-Level Elements

###Paragraph Tag (`<p>`)

Since HTML will not display line breaks within the HTML source to get that formatting to display within the browser we need to use the paragraph tag.
`<p></p>`. The paragraph tag is a block-level element. It will add a small amount of space above and below the element.  Paragraph tags should be used for all content that does not fit another case.

####EXAMPLE

	<p>sample text</p>


###Section Headers (h1 to h6)

HTML provides for up to six levels of headers for your web page. `<h1>`, `<h2>`. `<h3>`, `<h4>`, `<h5>`, `<h6>`. Headers are sometime called headlines are block-level elements there for they will always a create new line. In addition they will make the text bold and change the size of it depending on the number next to the `<h1>` is the largest and `<h6>` is the smallest.

Section headers should be used to define the important of the content. So there should only be one H1 on a page but there could be many H2s on a page since they would be viewed as sub header of the H1 and so on.

###EXAMPLE

	<h1>Article Title</h1>
	<h2>Article Subsection</h2>
	<h3>SubHeader</h3>
	<h2>Article Subsection</h2>


###Creating line break

The `<br>` tag inserts a single line break.

####EXAMPLE

	<p>This example is<br> <span>very important</span></p>

###List - `<ul>`, `<ol>`, `<li>`
List are built into HTML and come in two types, ordered and unordered. List are made up of at least two tags the `<ul>` or `<ol>` and the `<li>`.

The `<ul>` or `<ol>` will add a margin at the top and the bottom of the list along with indenting the list on the left side.

Tag|Description
--|--
`<ul></ul>`|Unordered list – bullets
`<ol></ol>`|Ordered list – numbers
`<li></li>`|List Item.

###example
##Unordered list

	<ul>
		<li>List item</li>
		<li>List item</li>
		<li>List item</li>
	</ul>

Ordered List

	<ol>
		<li>List item</li>
		<li>List item</li>
		<li>List item</li>
	</ol>

###Example

	<div>
		<h1> Lorem ipsum dolor sit amet </h1>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas quis augue ut massa nonummy viverra. <a href=”http://www.lorenipsum.com”>Cras convallis pulvinar</a> ante. Proin varius velit eget tellus. Duis elit. Quisque lectus velit, consequat sed, nonummy quis, molestie vitae, nisl. Praesent vehicula, odio vitae </p>
		<ul>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
		<ul>
	</div>

###Nested List Item

You can nest a list with in a list but it must be added to a list item

	<ul>
		<li>
			Item Text
			<ul>
				<li>Sub List Item</li>
			</ul>
		</li>
	<ul>

##Blockquote

A browser inserts white space before and after a blockquote element. It also insert margins for the blockquote element.

	<blockquote>
		<p>Here is a long quotation here is a long quotation</p>
	</blockquote>

###Breaking up a Page into Divisions (`<div>`)

Breaking the page up into divisions allows you to apply styles to an entire chunk of your page at once. This can also be used to layout your page. The <div> element is a block-level element but has not margin applied like the paragraph tag.

With the div element you will apply an attribute of class or id to apply a style to it.

####EXAMPLE

	<div>
		<h2>Article Subsection</h2>
		<p>sample text</p>
		<p>sample text</p>
		<p>sample text</p>
	</div>


##New HTML5 Tags

TAG|DESCRIPTION
--|--
`<article>`|Defines an article
`<aside>`|Defines content aside from the page content
`<details>`|Defines additional details that the user can view or hide
`<figure>`|Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
`<footer>` |Defines a footer for a document or section
`<header>`|Defines a header for a document or section
`<nav>`|Defines navigation links
`<section>`|Defines a section in a document

