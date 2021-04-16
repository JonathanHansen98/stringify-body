const sb = require(".");

(async () => {
  const data = await sb("fileName", { test: true });
  console.log(data);
})();
