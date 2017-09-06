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

There are many extra classes for defining the behavior of the `background-image`. They are:

```
.c-slice--bg-attachment-fixed { background-attachment: fixed;        }
.c-slice--bg-attachment-local { background-attachment: local;        }
.c-slice--bg-repeat           { background-repeat:     repeat;       }
.c-slice--bg-repeat-x         { background-repeat:     repeat-x;     }
.c-slice--bg-repeat-y         { background-repeat:     repeat-y;     }
.c-slice--bg-contain          { background-size:       contain;      }
.c-slice--bg-cover            { background-size:       cover;        }
.c-slice--bg-pos-l            { background-position:   left;         }
.c-slice--bg-pos-b            { background-position:   bottom;       }
.c-slice--bg-pos-bl           { background-position:   bottom left;  }
.c-slice--bg-pos-br           { background-position:   bottom right; }
.c-slice--bg-pos-r            { background-position:   right;        }
.c-slice--bg-pos-t            { background-position:   top;          }
.c-slice--bg-pos-tl           { background-position:   top left;     }
.c-slice--bg-pos-tr           { background-position:   top right;    }
```

This should give us enough flexibility to make interesting things happen. If these require more flexibility for responsive options then we can recommend these options be include in iotaCSS with a pull request. These should be enough to get us going though.

## Slices With Differing Background Colors

Using the background color utility classes, you can specify any background color in our palette for a Slice. You should be mindful of text contrast. Use a combination of the `.u-bg-color-*` classes and the `.c-light-on-dark` component to ensure readability.
