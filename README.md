# stringify-body

<img src="https://img.shields.io/badge/dependencies-0-35cade"> 

## Description <span id="d"></span> 
  Creates test json files suitable for serverless AWS lambda functions. Files will be created in a directory called "tests".
 
## Usage
1. In the root of your AWS lambda microservice, create a javascript file to create the templates for your test json files. Each module propery that is exported from this javascript file will be created as its own json file with the `tests` directory.

```
// templates.js

module.exports.myFile = {
  someData: ["blah", "blah", "blah"] 
};
```

2. Run `stringify-body`, passing the path to the file containing your templates with the `-p` or `--path` flag. Optionally, you can define a custom output directory name with the `-d` or `--directory` flag, the default output directory is `tests`

```
npx stringify-body -p templates.js
```

Output:
<br/>
<img src="https://i.imgur.com/aGtP95O.png" width='250px'>

3. You can now pass the path to your test json file to a serverless lambda function when invoking locally

```
sls invoke local --function myFunction --path tests/myFile.json
```

### Nested Directorys

For better organization, you may want to nest certain files together in a nested directory. This is acheivable by prefixing the exported module property with a `$`. Then, each property within that object will generate its own json file nested beneath the parent directory.

```
// templates.js

module.exports.$nestedDirectory = {
  nestedFile: {
    someData: ["blah", "blah", "blah"] 
  },
  secondNestedFile: {
    someData: ["bing", "bang", "pow"] 
  }
}
```

Output:
<br/>
<img src="https://i.imgur.com/5nhFznR.png" width='250px'>


## Notes

  The directory containing your test `json` files can also be added to the `exclude` section of your `serverless.yml` file to reduce package size.

  Using the shorthand `-p` for `--path` has issues per: https://github.com/serverless/serverless/issues/7871
 
## Author Info 
 
<img style='border-radius: 50%;' src="https://avatars.githubusercontent.com/u/58758929?" width="25px" />
 Name: Jonathan Hansen <br>
 <a href="https://github.com/JonathanHansen98"><img src="https://img.shields.io/static/v1?label=Projects&message=Github&color=35cade" /></a>
 <a href="mailto:kriah0872@gmail.com"><img src="https://img.shields.io/badge/Contact-Email%20Me!-35cade" /></a> <br>
 <br>
 