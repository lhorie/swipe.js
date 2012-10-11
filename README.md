# swipe.js

jQuery swipe events for browsers w/ touch event support.

- Currently it's just a quick dirty script that handles one-finger swipe events
- Currently doesn't support method shorthands (i.e. `.click()`)
- Currently doesn't pass any additional data to the event object

## API

`swipeleft`, `swiperight`, `swipeup`, `swipedown`

```javascript
$(document).on("swipeleft swiperight swipeup swipedown", function() {
	alert("swiped")
})
```
