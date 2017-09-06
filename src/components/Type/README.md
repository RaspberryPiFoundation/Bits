# Type

To ensure semantic integrity in our HTML, all typographic elements inherit their styles from `<body>`.

This means that elements like `<p>`, `<ul/ol>`, and `<h1>` through `<h6>` have no opinionated styles out of the box. No margins, line-heights, font-sizes or font-weights are defined on bare elements. Headings are bold, but that's the browser default, not ours.

The typographic elements should be used to define the document's structure, rather than being used to make text look a certain size.

There may be a case where you require a heading to appear as the "third level" heading styles, but the document outline requires that you use the `<h2>` element. By decoupling styles from semantics we're able to easily handle such cases.

## But what if I can't control the markup?

Good question! In some cases we don't have the luxury of setting a `class` on our elements. One fairly common case would be when outputting the contents of a blog post. In these cases you should use the `.c-wysiwyg` component. See the docs for that component for a description and correct usage instructions.

**Don't combine type components** – That's indicative of a design issue, or perhaps you're using the wrong component. Ask for help if you need to. Content structure and readability is pretty much the single most important thing about a web page, so be careful not to make a mess.
