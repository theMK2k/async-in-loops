const asyncFunction = require("./asyncFunction").asyncFunction;

(async () => {
  for (const entry of [1, 2, 3, 4, 5]) {
    await asyncFunction(`A${entry}`);
    await asyncFunction(`B${entry}`);
  }
})();
