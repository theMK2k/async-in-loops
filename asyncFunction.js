async function asyncFunction(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, 1000);
  });
}

module.exports = { asyncFunction };
