# Changes

## v0.5.0 (Incomming, medium term ...)

- Introduce TypeScript to repo (planned, evaluate)

## v0.2.7 (Incomming, short term ...)

- Router relased (work in progress)

## v0.2.6 (Incomming...)

- serviceTest module (drafted, work in progress)
- ...

## v0.2.4

- Fix bug with actions and addModuleInfo helper

## v0.2.3

- Fix bug with styles when passing an object
- Fix broken data-task
- Add namespace to style hashes

## v0.2.2

- Module definition can use animations
- Implement example of css animations
- Update mailboxNoRouter example

## v0.2.1

- Style helpers exposed in F.style and removed side effects from some functions

## v0.2.0

- Styles are disposed when hot-swap modules
- Styles are part of the module definition object (BREAKING)
- Update examples

## v0.1.1

- Fix broken build v0.1.0

## v0.1.0

- Implement granular log option for modules
- Deleted DEPRECATED methods
- Fix broken v0.0.18, and add es6 modules to Fractal (no more module.exports, require used for dynamic loading and use with .default), refactoring the whole library
- Update examples and DEPRECATE REMOVED log

## v0.0.18

- Module definitions should have a name in upper camelcase
- Implement _action input for easy subscription to an event that don't require processing or multiple dispatching
- Notify when a service receive an event with no handler
- Implement _modulePath string for tasks
- Notify when receive a task with no handler
- Clean and update deps
- Support async/await
- Deleted DEPRECATED fetch driver
- Improve docs and readme

## v0.0.17

- Fix bug with services that not exposes tasks or drivers
- Added starter tutorial (TODO)

## v0.0.16

- Add emitter task handler
- Add listenable driver
- Deprecated socketio task handler
- Deprecated socketio driver

## v0.0.15

- Error exceptions DEPRECATED in favor of future error$ stream implementation
- Services are automerged in engine definition (F.run)
- Added chatWithService example of using automerged services

## v0.0.14

- Css utils has a absoluteCenter props with flexbox
- DEPRECATED use of F.css, use F.style instead
- flyd is usable as F.flyd dependency

## v0.0.13

- Queue optional for services

## v0.0.12

- Specific tasks and optimizations

## v0.0.11

- Bug fixes and optimizations

## v0.0.10

- Add Router module
- Add free-style to core and some utilities
- Fixed playground errors

## v0.0.9-8

- Working in new examples and documentation
- Improved services

## v0.0.7

- Add chat example
- Add service to core
- Minor bug fixes
- Add Value Task
- Add a way to change socket in socketioTask and socketioDriver
- Engine exposes drivers and tasks
- Improved chat example
