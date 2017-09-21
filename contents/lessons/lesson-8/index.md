---
title: Lesson 8
author: Dan Hahn
date: 11/08/2017 15:00
template: article.jade
---

This week we will talk about css display, building navigations, and simple layouts.

<span class="more"></span>

# CSS Display

* [CSS display (inline, block, inline-block, etc)]()
* [Navigation](navigations.html)
* [Simple Layouts](layouts.pdf)

## Display

Value	| Description
-- | --
`inline` | 	Default value. Displays an element as an inline element (like `<span>`)	 
`block` | 	Displays an element as a block element (like `<p>`)	 
`flex` | 	Displays an element as a block-level flex container. New in CSS3	 
`inline-block` | 	Displays an element as an inline-level block container. The inside of this block is formatted as block-level box , and the element itself is formatted as an inline-level box	 
`inline-flex` | 	Displays an element as an inline-level flex container. New in CSS3	 
`inline-table` | 	The element is displayed as an inline-level table	 
`list-item` | 	Let the element behave like a `<li>` element	 
`run-in` | 	Displays an element as either block or inline, depending on context	 
`table` | 	Let the element behave like a `<table>` element	 
`table-caption` | 	Let the element behave like a `<caption>` element	 
`table-column-group` | 	Let the element behave like a `<colgroup>` element	 
`table-header-group` | 	Let the element behave like a `<thead>` element	 
`table-footer-group` | 	Let the element behave like a `<tfoot>` element	 
`table-row-group` | 	Let the element behave like a `<tbody>` element	 
`table-cell` | 	Let the element behave like a `<td>` element	 
`table-column` | 	Let the element behave like a `<col>` element	 
`table-row` | 	Let the element behave like a `<tr>` element	 
`none` | 	The element will not be displayed at all (has no effect on layout)	 
`initial` | Sets this property to its default value. Read about initial	 
`inherit` | Inherits this property from its parent element. Read about inherit

<style>
tr td:first-of-type code {white-space: nowrap}
</style>