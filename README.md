# stringify-body

<img src="https://img.shields.io/badge/code%20coverage-100%25-35cade"> 
<img src="https://img.shields.io/badge/dependencies-0-35cade"> 
<img src="https://img.shields.io/badge/unpacked%20size-3.11kb-35cade"> 

## Description <span id="d"></span> 
  Creates test json files suitable for serverless AWS lambda functions. Files will be created in a directory called "tests".

## Installation
  Install via npm:
  ```
  $ npm i -D stringify-body
  ```
 
## Usage
1. In the root of your AWS lambda microservice, in `createTest.js`:

  ```
  const sb = require("stringify-body");

  let options = {dirName: "customDirectory"}

  (async () => {
    await sb("myTestFile", {...}, options);
  })()
  ```

2. Run this file from your console, this will create a json file located at `customDirectory/myTestFile.json`.

  ```
  $ node createTest.js
  ```

3. You can now specify a route to this file when invoking a lambda function locally using serverless with the following command:

  ```
  $ sls invoke local --function myFunction --path customDirectory/myTestFile.json
  ```

4. `createTest.js` can now be deleted or added to the `exclude` section of your `serverless.yml` file.

## Notes

  The directory containing your test `json` files can also be added to the `exclude` section of your `serverless.yml` file to reduce package size.

  Using the shorthand `-p` for `--path` has issues per: https://github.com/serverless/serverless/issues/7871
 
## Author Info 
 
<img style='border-radius: 50%;' src="https://avatars.githubusercontent.com/u/58758929?" width="25px" />
 Name: Jonathan Hansen <br>
 <a href="https://github.com/JonathanHansen98"><img src="https://img.shields.io/static/v1?label=Projects&message=Github&color=35cade" /></a>
 <a href="mailto:kriah0872@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-35cade" /></a> <br>
 <br>
 