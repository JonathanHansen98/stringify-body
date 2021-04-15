const fs = require("fs").promises;
const path = require("path");

/**
 *  Creates test files suitable for passing as test data to serverless lambda functions.
 * @param {String} fileName Name of the json file to be created.
 * @param {Object} obj Object that will be written as the stringified body.
 * @param {*} options Optional configuration
 * @param {String} [options.dirName=tests] Name of the folder that the test files will be written to. Defaults to "tests".
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

const sb = async (fileName, obj, options) => {
  try {
    let testDir = options?.dirName ?? "tests";

    await fs.mkdir(testDir, { recursive: true });

    await fs.writeFile(
      `./${testDir}/${fileName}.json`,
      JSON.stringify({ body: JSON.stringify(obj) }),
      "utf-8"
    );

    return "file written succefully";
  } catch (error) {
    console.log(error);
  }
};

module.exports = sb;