const sb = require("./index");

test("should create test data", async () => {
  const data = await sb("fileName", { test: true });

  expect(data).toBe("file written succefully");
});

test("No file name provided", async () => {
  let test;

  return sb(test, { testData: true }).catch((e) =>
    expect(e).toMatch("Filename is required, recieved: undefined")
  );
});

test("No obj name provided", async () => {
  let test;
  
  return sb("fileName", test).catch((e) =>
    expect(e).toMatch("2nd parameter must be a javascript object.")
  );
});
