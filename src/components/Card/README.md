# Card

Cards are used a lot, and are fairly flexible. The contents of a card should never be too complicated. An optional image can be added, and the whole card can be a link if necessary (or you can add a regular link to the card's content too if you prefer). They will always stretch to 100% the width of their parent, and are intended for use within the iota grid system.

## With Image

```jsx
<Card
  imageSrc="http://via.placeholder.com/300x200"
  imageAlt="Placeholder image">
    <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <span class="o-type-caption">2 days ago</span>
</Card>
```

#### In HTML/CSS

```html static
<div class="c-card">
  <img src="http://via.placeholder.com/300x200" alt="Placeholder image" class="c-card__image" />
  <div class="c-card__content">
    <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <span class="o-type-caption">2 days ago</span>
  </div>
</div>
```

## Without Image

```jsx
<Card>
  <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <span class="o-type-caption">2 days ago</span>
</Card>
```

#### In HTML/CSS

```html static
<div class="c-card" href="#">
  <div class="c-card__content">
    <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <span class="o-type-caption">2 days ago</span>
  </div>
</div>
```

## As Link

```jsx
import { MemoryRouter } from 'react-router-dom';
<MemoryRouter>
  <Card
    imageSrc="http://via.placeholder.com/300x200"
    imageAlt="Placeholder image"
    to="https://www.raspberrypi.org">
      <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <span class="o-type-caption">2 days ago</span>
  </Card>
</MemoryRouter>
```

#### In HTML/CSS

```html static
<a class="c-card c-card--link" href="#">
  <img src="http://via.placeholder.com/300x200" alt="" class="c-card__image" />
  <div class="c-card__content">
    <p class="o-type-base u-mb-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <span class="o-type-caption">2 days ago</span>
  </div>
</a>
```
