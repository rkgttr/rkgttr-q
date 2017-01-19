# [rkgttr-q](https://github.com/rkgttr/rkgttr-q)

[![NPM version](http://img.shields.io/npm/v/rkgttr-q.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-q)
[![NPM downloads](http://img.shields.io/npm/dm/rkgttr-q.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-q)
[![Build Status](http://img.shields.io/travis/rkgttr/rkgttr-q/master.svg?style=flat-square)](https://travis-ci.org/rkgttr/rkgttr-q)
[![Coverage Status](https://img.shields.io/coveralls/rkgttr/rkgttr-q.svg?style=flat-square)](https://coveralls.io/rkgttr/rkgttr-q)
[![Dependency Status](http://img.shields.io/david/rkgttr/rkgttr-q.svg?style=flat-square)](https://david-dm.org/rkgttr/rkgttr-q)

> HTML Components helpers, shamelessly inspired by https://github.com/davidgilbertson/know-it-all.

### How to Install

```sh
$ npm install rkgttr-q --save-dev
```
or

```sh
$ yarn add rkgttr-q --dev
```

### Getting Started

Q is a module that consists of shortcuts to select DOM elements. For example instead of typing `document.querySelectorAll('selector')` you just have to type `Q.all('selector')`. Following is the list of Q methods:

 * `one`: shortcut for `document.querySelector`
 * `all`: shortcut for `document.querySelectorAll`
 * `id`: shortcut for `document.getElementById`
 * `classname`: shortcut for `document.getElementsByClassName`
 * `tag`: shortcut for `document.getElementsByTagName`

 All methods, except `Q.id` can have a second optional parameters, which should be a `Node` object, that is the context from where you want to perform the query. For example:


```js
import * as Q from 'rkgttr-q';

Q.all('li'); // return all list elements in the document
Q.all('li', Q.one('ul.todo')); // return all list elements into the .todo list

```



### License

MIT © 2016 Erik Guittiere
