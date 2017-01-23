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

'use strict';

const assert = require('assert');

require('../../lib/stringz');

describe('Strings (Unit)', function () {
    /**
     * Check string#startsWith(val);
     */
    describe('#startsWith(str)', function () {
        it('should return true when the string starts with the given value', function () {
            assert('Bob'.startsWith('B'));
        });
        it('should be case sensitive', function () {
            assert.equal(false, 'Bob'.startsWith('b'));
        });
        it('should respect many characters', function () {
            assert('Franklin'.startsWith('Frank'));
        });
        it('should be able to handle spaces', function () {
            assert('The quick brown fox'.startsWith('The quick'));
        });
    });

    /**
     * Check string#endsWith(val);
     */
    describe('#endsWith(str)', function () {
        it('should return true when the string ends with the given value', function () {
            assert('Bob'.endsWith('b'));
        });
        it('should be case sensitive', function () {
            assert.equal(false, 'Bob'.endsWith('B'));
        });
        it('should respect many characters', function () {
            assert('Franklin'.endsWith('lin'));
        });
        it('should be able to handle spaces', function () {
            assert('The quick brown fox'.endsWith('brown fox'));
        });
    });

    /**
     * Check string#containsIgnoreCase(val);
     */
    describe('#containsIgnoreCase(str)', function () {
        it('should return true when the string contains the given value', function () {
            assert('Bob'.containsIgnoreCase('b'));
        });
        it('should be case insensitive', function () {
            assert('BOB'.containsIgnoreCase('b'));
        });
        it('should have no false positives', function () {
            assert.equal(false, 'The quick brown'.containsIgnoreCase('x'));
        });
        it('should respect many characters', function () {
            assert('Franklin'.containsIgnoreCase('ankl'));
        });
        it('should be able to handle spaces', function () {
            assert('The quick brown fox'.containsIgnoreCase('ck bro'));
        });
    });

    /**
     * Check string#replaceAll(oldStr,newStr);
     */
    describe('#replaceAll(oldStr,newStr)', function () {
        it('should return the same string when the replace value does not match anything', function () {
            assert.equal('The quick brown fox', 'The quick brown fox'.replaceAll('bob', 'frank'));
        });
        it('should replace one character', function () {
            assert.equal('Bib', 'Bob'.replaceAll('o', 'i'));
        });
        it('should replace all instances of a character', function () {
            assert.equal('Boddy', 'Bobby'.replaceAll('b', 'd'));
        });
        it('should be case sensitive', function () {
            assert.equal('Box', 'Box'.replaceAll('b', 'd'));
        });
        it('should respect spaces', function () {
            assert.equal('Thequickbrownfox', 'The quick brown fox'.replaceAll(' ', ''));
        });
        it('should be able to change the first character', function () {
            assert.equal('kitten', 'mitten'.replaceAll('m', 'k'));
        });
        it('should respect words', function () {
            assert.equal('meow meow black sheep', 'baa baa black sheep'.replaceAll('baa', 'meow'));
        });
    });
});
