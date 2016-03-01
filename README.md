# utmparser

Middleware to parse UTM query string as request attribute. Based on [utm_parse](https://www.npmjs.com/package/utm_parse) package.
All initial dev credits to [tjkrusinski](https://github.com/tjkrusinski).
We love your help/contributions in making it better.

## Examples

```
var utm = require('utmparser');

//express app variable

var express = require('express');

var app = express();

app.use(utm.middleware);

//checking UTMs of current request URL e.g.: http://localhost:1338/?utm_source=mySource&utm_medium=medium

var currentUTM = req.queryUTM;

console.log(currentUTM);

// =>  utm_source=mySource;utm_medium=medium

```

## License

(The MIT License)

Copyright (c) 2016 AKSS Consulting Services &lt;ankit@courses.ninja&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
