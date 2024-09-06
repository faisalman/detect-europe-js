# detectEurope.js

Determine whether a user is from a country within or near the European Union (EU), EFTA, or EEA based on their timezone settings.

```sh
npm i detect-europe-js
```

### * `isFromEU():boolean`

European Union (EU) countries

### * `isFromEEA():boolean`

EU countries + Iceland, Liechtenstein and Norway

### * `isFromEFTA():boolean`

Switzerland + Iceland, Liechtenstein and Norway

## Code Example

```js
import { isFromEU } from 'detect-europe-js';

if(isFromEU()) {
    // show cookie banner
}
```