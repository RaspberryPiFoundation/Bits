# Badge

Badges can be represented with the `<div>` element. There are primary and secondary styles, and a modifier for each available colour.

```
<div class="c-badge">Badge Primary</div>
<div class="c-badge c-badge--secondary">Badge Secondary</div>
<div class="c-badge c-badge--brand-rpi-red">Badge brand-rpi-red</div>
<div class="c-badge c-badge--brand-rpi-green">Badge brand-rpi-green</div>
<div class="c-badge c-badge--brand-cc-green">Badge brand-cc-green</div>
<div class="c-badge c-badge--brand-primary-yellow">Badge brand-primary-yellow</div>
<div class="c-badge c-badge--brand-primary-orange">Badge brand-primary-orange</div>
<div class="c-badge c-badge--brand-primary-red">Badge brand-primary-red</div>
...
```

## Usage in react

```
import React from 'react';
import { Badge } from 'raspberry-pi-bits';

const VolunteerLabel = ({ name }) => (
  <div>
    {name}
    {/* set variant below to primary, secondary, brand-rpi-red, brand-rpi-green etc */}
    <Badge variant="primary">Club Owner</Badge>
  </div>
);

export default VolunteerLabel;
```
