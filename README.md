# url-get-builder

A simple tool to build URLs with GET parameters

``` sh
npm i --save url-get-builder
```

## Example
``` js
const GETBuilder = require('url-get-builder');

let redirect = new GETBuilder('http://example.com/')
			    .add('someurl', 'https://google.com/')
				.getURL();
					
console.log(redirect);
//http://example.com/?someurl=https%3A%2F%2Fgoogle.com%2F
```
