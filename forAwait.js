const { asyncFunction } = require("./asyncFunction");

(async () => {
  for await (entry of [1, 2, 3, 4, Promise.resolve(5)]) {
    await asyncFunction(`A${entry}`);
    await asyncFunction(`B${entry}`);
  }
})();
