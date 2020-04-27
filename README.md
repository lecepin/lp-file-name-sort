# lp-file-name-sort 文件名排序


[![npm (scoped with tag)](https://img.shields.io/npm/v/lp-file-name-sort.svg)](https://npmjs.com/package/lp-file-name-sort)
[![NPM downloads](https://img.shields.io/npm/dm/lp-file-name-sort.svg)](https://npmjs.com/package/lp-file-name-sort)

解决 `Array.sort((a, b) => a.localeCompare(b))` 排序错误问题。

如：

```js
[
  "aaa2.jpg",
  "aaa1.jpg",
  "aaa03.jpg",
  "aaa4.jpg",
  "aaa05.jpg",
  "aaa6.jpg",
  "aaa7.jpg",
  "aaa10.jpg",
  "aaa8.jpg",
  "aaa09.jpg",
].sort((a, b) => a.localeCompare(b));

// 输出 非预期排序
// [
//   "aaa03.jpg",
//   "aaa05.jpg",
//   "aaa09.jpg",
//   "aaa1.jpg",
//   "aaa10.jpg",
//   "aaa2.jpg",
//   "aaa4.jpg",
//   "aaa6.jpg",
//   "aaa7.jpg",
//   "aaa8.jpg"
]
```

使用 `lpFileNameSort `：

```js
var lpFileNameSort = require('lp-file-name-sort');

[
  "aaa2.jpg",
  "aaa1.jpg",
  "aaa03.jpg",
  "aaa4.jpg",
  "aaa05.jpg",
  "aaa6.jpg",
  "aaa7.jpg",
  "aaa10.jpg",
  "aaa8.jpg",
  "aaa09.jpg",
].sort(lpFileNameSort)

// 输出 符合预期
// [
//   "aaa1.jpg",
//   "aaa2.jpg",
//   "aaa03.jpg",
//   "aaa4.jpg",
//   "aaa05.jpg",
//   "aaa6.jpg",
//   "aaa7.jpg",
//   "aaa8.jpg",
//   "aaa09.jpg",
//   "aaa10.jpg"
// ]
```

## 使用


[![](https://nodei.co/npm/lp-file-name-sort.png)](https://npmjs.com/package/lp-file-name-sort)

```
npm install lp-file-name-sort
```

浏览器：

```html
<script src="https://unpkg.com/lp-file-name-sort/dist/index.js"></script>
// lpFileNameSort
```

node.js：

```js
var lpFileNameSort = require('lp-file-name-sort');
```

ES Module：

```js
<script type="module">
  import lpFileNameSort from "https://unpkg.com/lp-file-name-sort/dist/index.esm.js";
</script>
```

ES6：

```js
import lpFileNameSort from 'lp-file-name-sort/dist/index.esm.js'; 
```