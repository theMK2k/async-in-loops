const asyncFunction = require("./asyncFunction").asyncFunction;

[1, 2, 3, 4, 5].reduce(
  (current, value) =>
    current.then(_ => asyncFunction(`A${value}`).then(() => asyncFunction(`B${value}`))),
  Promise.resolve()
)