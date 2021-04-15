# stringify-body

## Description <span id="d"></span> 
  Creates test json files suitable for serverless AWS lambda functions. Files will be created in a directory called "tests".
 
## Usage
  In the root of your AWS lambda microservice, in `createTest.js`:

  ```
  const sb = require("stringify-body");

  let options = {dirName: "customDirectory"}

  sb("myTestFile", {...}, options);
  ```

  Run this file from your console with `node createTest.js`, this will create a json file located at `customDirectory/myTestFile.json`.

  You can now specify a route to this file when invoking a lambda function locally using serverless with the following command:

  `sls invoke local --function myFunction --path customDirectory/myTestFile.json`

  `createTest.js` can now be deleted or added to the `exclude` section of your `serverless.yml` file.

  The directory containing your test json files can also be added to the `exclude` section of your `serverless.yml` file to reduce package size.

  NOTE: Using the shorthand `-p` for `--path` has issues per: https://github.com/serverless/serverless/issues/7871
 
## Author Info 
 
<img style='border-radius: 50%;' src="https://avatars.githubusercontent.com/u/58758929?" width="25px" />
 Name: Jonathan Hansen <br>
 <a href="https://github.com/JonathanHansen98"><img src="https://img.shields.io/static/v1?label=Projects&message=Github&color=lightgrey" /></a>
 <a href="mailto:kriah0872@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-lightgrey" /></a> <br>
 <br>
 