---
title: Lesson 1
author: the-wintersmith
date: 9/30/2015 15:00
template: article.jade
---

# Inline Elements

* [Intro]()
* [Editors](editors.html)
* [HTML Template](template.html)
* [Block-Level](block-level.html)
* [Inline](inline.html)
* [Classwork](classwork.html)
* [Homework](homework.html)

HTML elements are usually "inline" elements or "block-level" elements. An inline element occupies only the space bounded by the tags that define the inline element.

In other words inline elements will not format the text to its own line instead the text will remain "inline" with the rest of text.  

**Note:** inline elements always need to be wrapped with a block-level element.  

## Here are a few inline tags we will use.

* `<em>` - The HTML Emphasis Element (`<em>`) marks text that has stress emphasis.
* `<strong>` - The HTML Strong Element (`<strong>`) gives text strong importance, and is typically displayed in bold.
* `<span>` - The HTML `<span>` element is a generic inline container for phrasing content, which does not inherently represent anything. *It should be used only when no other semantic element is appropriate.*
* `<code>` - The HTML Code Element (`<code>`) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.

### example
`<em>`

    <p>In HTML 5, what was previously called <em>block-level</em> content is now called <em>flow</em> content.</p>

In HTML 5, what was previously called *block-level* content is now called *flow* content.

---

`<strong>`

    <p>When doing x it is <strong>imperative</strong> to do y before proceeding.</p>

When doing x it is **imperative** to do y before proceeding.

---

`<span>`

    <p><span>Some text</span></p>

Some text

---

`<code>` Example

    <p>Regular text. <code>This is code.</code> Regular text.</p>

Regular text. <code>This is code</code>. Regular text.
