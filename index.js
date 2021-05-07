const fs = require("fs").promises;

/**
 *  Creates test files suitable for passing as test data to serverless lambda functions.
 * @param {String} fileName Name of the json file to be created.
 * @param {Object} obj Object that will be written as the stringified body.
 * @param {*} options Optional configuration
 * @param {String} [options.dirName=tests] Name of the folder that the test files will be written to. Defaults to customDirectory.
 * @example
 * let testEvent = {
 *  queryType: "my-query"
 *  params: {
 *    id: 1
 *  }
 * }
 *
 * let options = {
 * dirName: "myServiceTests"
 * }
 *
 * // Will create a file at "./myServiceTests/myQueryTestData.json"
 * sb("myQueryTestData", testEvent, options)
 *
 */

const write = async (fileName, data, customDirectory, nestedDirectory) => {
  customDirectory = customDirectory ?? "tests";

  await fs.mkdir(
    nestedDirectory ? `${customDirectory}/${nestedDirectory}` : customDirectory,
    { recursive: true }
  );

  await fs.writeFile(
    nestedDirectory
      ? `./${customDirectory}/${nestedDirectory}/${fileName}.json`
      : `./${customDirectory}/${fileName}.json`,
    JSON.stringify({ body: JSON.stringify(data) }),
    "utf-8"
  );
};

const { argv: args } = process;
const path = require("path");

(async () => {
  const filePathIndex =
    args.indexOf("-p") + 1 || args.indexOf("--path") + 1 || null;
  const filePath = args[filePathIndex];

  if (!filePath) return console.log("need file path");

  const customDirectoryIndex =
    args.indexOf("-d") + 1 || args.indexOf("--directory") + 1 || null;
  const customDirectory = args[customDirectoryIndex];

  const testData = require(path.resolve(filePath));

  await Promise.all(
    Object.entries(testData).map(([key, val]) => {
      if (key.charAt(0) == "$") {
        Object.entries(val).map(([fileName, data]) =>
          write(fileName, data, customDirectory, key.slice(1, key.length))
        );
        return;
      }

      write(key, val, customDirectory);
    })
  );
})();
