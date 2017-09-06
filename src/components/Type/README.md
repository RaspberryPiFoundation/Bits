# Type

To ensure semantic integrity in our HTML, all typographic elements inherit their styles from `<body>`.

This means that elements like `<p>`, `<ul/ol>`, and `<h1>` through `<h6>` have no opinionated styles out of the box. No margins, line-heights, font-sizes or font-weights are defined on bare elements. Headings are bold, but that's the browser default, not ours.

The typographic elements should be used to define the document's structure, rather than being used to make text look a certain size.

There may be a case where you require a heading to appear as the "third level" heading styles, but the document outline requires that you use the `<h2>` element. By decoupling styles from semantics we're able to easily handle such cases.

## But what if I can't control the markup?

Good question! In some cases we don't have the luxury of setting a `class` on our elements. One fairly common case would be when outputting the contents of a blog post. In these cases you should use the `.c-wysiwyg` component. See the docs for that component for a description and correct usage instructions.

## Do-s and Don't-s

### DO

- **Outline your document correctly** – Define your document structure first. You can check the document outline with browser extensions such as [HeadingsMap for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi/related?hl=en).
- **Use these type components** – Text will render fine if you just drop in a `<p>`, but there'll be no margin on the bottom. Headings will be bold, but they'll be the same size as base text, and no margins. These components are to help you style your text, so do use them!

### DON'T

- **Don't let design dictate your document outline** – Get your content sorted first, apply the type component `class`es after that.
- **Don't apply inline styles** – Ever. Don't do that. You'll be mocked and shamed during the PR review.
- **Don't write extra styles** – If you're doing that, then there's a chance something's missing from the pattern library
- **Don't combine these components** – That's indicative of a design issue, or perhaps you're using the wrong component. Ask for help if you need to.
