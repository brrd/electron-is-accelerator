# electron-is-accelerator

Check if a string is a valid [Electron accelerator](https://github.com/electron/electron/blob/master/docs/api/accelerator.md)

## Installation

```
$ npm install --save electron-is-accelerator
```

## Usage

```javascript
var isAccelerator = require("electron-is-accelerator");

isAccelerator("CommandOrControl+Shift+Z"); // true
isAccelerator("CommandOrControl+F9"); // true
isAccelerator("CommandOrContrl+F9"); // false
isAccelerator("A+Z"); // false
```

## License

The MIT License (MIT)
Copyright (c) 2016 Thomas Brouard
