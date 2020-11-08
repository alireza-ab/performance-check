# Performance Check

the simple script for check the performance of javascript code with Date and performance and console.time APIs.

## Installation

```shell
npm install @alireza-ab/performance-check
```

## Usage

```js
const Performance = require("@alireza-ab/performance-check");
```

```js
let forArr = [];
Performance.start("for loop");
for (let i = 0; i < 1000; i++) {
	forArr.push(i);
}
Performance.end("for loop");

//			||
//			||
//		    \/

// performance of for loop:
//   performance interface: (n)ms
//   Date library: (n)ms
//   for loop: (n)ms

let whileArr = [];
let i = 0;
Performance.start("while loop");
while (i < 1000) {
	whileArr.push(i);
	i++;
}
Performance.end("while loop");

//			||
//			||
//		    \/

// performance of while loop:
//   performance interface: (n)ms
//   Date library: (n)ms
//   while loop: (n)ms
```

if the parameter not passed

```js
let forArr = [];
Performance.start();
for (let i = 0; i < 1000; i++) {
	forArr.push(i);
}
Performance.end();

//			||
//			||
//		    \/

// performance of 1st code:
//   performance interface: (n)ms
//   Date library: (n)ms
//   1st code: (n)ms
```

## License

Performance-check is available under the [MIT](https://opensource.org/licenses/MIT) license.
