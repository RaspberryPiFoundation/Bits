# Slice

Not *that* kind of Slice.

A Slice is a horizontal section of the website. The will almost always contain a `.o-container` element to constrain the width of the content.

At its most basic, a Slice has some top and bottom padding, and nothing else. There are further options for altering their appearance, but the most basic implementation is as follows:

```
<div class="c-slice">
  ...
</div>
```

## Slices With Background Images

You may optionally define a `background-image`, which must be set with inline styles. Please note that **this is the only circumstance under which it is acceptable to define an inline style**.

To manage the behavior of your background image, use the `.u-bg-*` utility classes.

## Slices With Differing Background Colors

Using the background color utility classes, you can specify any background color in our palette for a Slice. You should be mindful of text contrast. Use a combination of the `.u-bg-color-*` classes and the `.c-light-on-dark` component to ensure readability.
