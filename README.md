# tapps-material
[![Build Status](https://travis-ci.org/sqhive/tapps-material.svg?branch=master)](https://travis-ci.org/sqhive/tapps-material)

### React-Tap-Event-Plugin

Some components use
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) to
listen for touch events because onClick is not fast enough
_This dependency is temporary and will eventually go away._ Until then,
be sure to inject this plugin at the start of your app.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

## Thanks

Thanks to [Call-Em-All](https://github.com/callemall), where this project originated from.

## License
This project is licensed under the terms of the
[MIT license](https://github.com/sqhive/tapps-material/blob/master/LICENSE)
