```jsx
import { MemoryRouter } from 'react-router-dom';
<MemoryRouter>
  <Pagination
    linkNextHref="#"
    linkNextLabel=""
    linkPrevHref="#"
    linkPrevLabel=""
    pageCurrent={3}
    pageMax={10} />
</MemoryRouter>
```

#### In HTML/CSS

```html static
<div class="c-pagination">
  <a class="c-paginiation__link c-paginiation__link--prev" href="#">
    <span class="u-hidden">Prev</span>
  </a>

  <span class="c-pagination__label">
    Page 3 of 10
  </span>

  <a class="c-paginiation__link c-paginiation__link--next" href="#">
    <span class="u-hidden">Next</span>
  </a>
</div>
```
