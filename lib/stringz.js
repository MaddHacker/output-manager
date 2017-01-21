/**
 * Copyright 2017 MaddHacker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * MAKE STRINGS USEFUL => Prototypes for String so it's not as annoying...
 * 
 * To use, simply include:
 *      require('stringz');
 * in your main entry point (typically index.js)
 */

'use strict';

if (typeof String.prototype.startsWith != 'function') {
    /**
     * starts with functionality
     * 
     * @param {string}
     *            string to match against
     * @returns {boolean} <b>true</b> if this ends with string, <b>false</b>
     *          otherwise
     * 
     * @usage 'bob'.startsWith('b'); => true
     * @usage 'A long string'.startsWith('A lon') => true
     * @usage 'A long string'.startsWith('A lone') => false
     */
    String.prototype.startsWith = function (str) {
        return this.slice(0, str.length) == str;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    /**
     * starts with functionality
     * 
     * @param {string}
     *            string to match against
     * @returns {boolean} <b>true</b> if this starts with string, <b>false</b>
     *          otherwise
     * 
     * @usage 'bob'.endsWith('b'); => true
     * @usage 'A long string'.endsWith('string') => true
     * @usage 'A long string'.endsWith('a string') => false
     */
    String.prototype.endsWith = function (str) {
        return this.slice(-str.length) == str;
    };
}

if (typeof String.prototype.containsIgnoreCase != 'function') {
    /**
     * Simple true/false to tell if the given string matches (ignoring case)
     * some subset of <b>this</b> string
     * 
     * @param {string}
     *            to match against (ignoring case)
     * @returns {boolean} <b>true</b> if the string is contained (without
     *          matching case), <b>false</b> otherwise
     * 
     * @usage 'my string'.containsIgnoreCase('str') => true
     * @usage 'my long string'.containsIgnoreCase('long') => true
     * @usage 'my long string'.containsIgnoreCase('LONG') => true
     * @usage 'my super long string'.containsIgnoreCase('rings') => false
     */
    String.prototype.containsIgnoreCase = function (str) {
        return this.search(new RegExp(str, 'i')) > -1;
    };
}

if (typeof String.prototype.replaceAll != 'function') {
    /**
     * Replace all functionality
     * 
     * @param {string}
     *            string to replace
     * @param {string}
     *            string to replace with
     * @returns {string} with values replaced
     * 
     * @usage 'bob'.replaceAll('b','m'); => 'mom'
     * @usage 'My very long string'.replaceAll(' ','_'); =>
     *        'My_very_long_string'
     */
    String.prototype.replaceAll = function (oldStr, newStr) {
        var tmpStr = this;
        while (tmpStr.indexOf(oldStr) > -1) {
            tmpStr = tmpStr.replace(oldStr, newStr);
        }
        return tmpStr;
    };
}
