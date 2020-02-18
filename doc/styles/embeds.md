Embedded iframes can be made responsive using the following classes:

- `.responsive-embed` (for the container)
- `.responsive-embed--video` (for the container)
- `.responsive-embed__iframe` (for the iframe)

The `--video` modifier assumes an aspect ratio of 16:9 (further modifiers should be added as needed).

```
<div class="responsive-embed responsive-embed--video">
  <iframe class="responsive-embed__iframe" src="https://www.youtube.com/embed/56B0P5WdAGQ"></iframe>
</div>
```
