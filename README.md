 `rendered`, `created`, `destroyed` should not be used on body, window, or document.
Essentially not on `unique` items which can have the values you just set overwritten by the next package that is loaded.

For a 'when ready' hook use 'Meteor.startup' called when the DOM is ready
http://docs.meteor.com/#/full/meteor_startup