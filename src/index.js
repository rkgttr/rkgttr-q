/**
 * rkgttr-q
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import 'rkgttr-arrayfrompolyfill';

export function one(selector, parent = document) {
  return parent.querySelector(selector) || parent.createElement('div');
}
export function all(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}
export function id(selector) {
  return document.getElementById(selector) || document.createElement('div');
}
export function classname(selector, parent = document) {
  return Array.from(parent.getElementsByClassName(selector));
}
export function tag(selector, parent = document) {
  return Array.from(parent.getElementsByTagName(selector));
}
