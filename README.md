# palindrome-game

`npm install && npm run start:dev`

## [View Live Demo](https://palindrome-game.herokuapp.com/)

### Wait, what's different?

The challenge was to add a couple of methods to meet the specification, not use a database, not use any frameworks, and not mess with the front-end - simplicity worked, but it wasn't very demonstrative of my programming practices.

This still does the same thing, however I've updated the project to incorporate TypeScript and ES6 imports - this makes it easier to make things domain-driven, as I can now declare interfaces that allow for clearer separation-of-concerns.

Additionally, I've separated Express's routing into a more extensible folder structure, and add E2E tests using [Chai](https://www.chaijs.com/).
