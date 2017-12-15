Cards are used a lot, and are fairly flexible. The contents of a card should never be too complicated. An optional image can be added, and the whole card can be a link if necessary (or you can add a regular link to the card's content too if you prefer). They will always stretch to 100% the width of their parent, and are intended for use within the iotaCSS grid system.

## With Image

```
<Card imageSrc="http://via.placeholder.com/300x200">
<p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<span class="o-type-caption">2 days ago</span>
</Card>
```

## Without Image

```
<Card>
  <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <span class="o-type-caption">2 days ago</span>
</Card>
```

## As Link

```
<Card
  imageAlt=""
  imageSrc="http://via.placeholder.com/300x200"
  to="#"
>
  <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <span class="o-type-caption">2 days ago</span>
</Card>
```
