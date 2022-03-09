const asyncFunction = require("./asyncFunction").asyncFunction;

(async () => {
  [1, 2, 3, 4, 5].forEach(async (entry) => {
    await asyncFunction(`A${entry}`);
    await asyncFunction(`B${entry}`);
  });
})();
