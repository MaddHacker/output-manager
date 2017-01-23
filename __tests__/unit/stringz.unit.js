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

require('../../lib/stringz');

describe('Strings (Unit)', function () {
    /**
     * Check string#startsWith(val);
     */
    describe('#startsWith(str)', function () {
        it('should return true when the string starts with the given value', function () {
            expect('Bob'.startsWith('B')).toBe(true);
        });
        it('should be case sensitive', function () {
            expect('Bob'.startsWith('b')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.startsWith('Frank')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.startsWith('The quick')).toBe(true);
        });
    });

    /**
     * Check string#endsWith(val);
     */
    describe('#endsWith(str)', function () {
        it('should return true when the string ends with the given value', function () {
            expect('Bob'.endsWith('b')).toBe(true);
        });
        it('should be case sensitive', function () {
            expect('Bob'.endsWith('B')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.endsWith('lin')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.endsWith('brown fox')).toBe(true);
        });
    });

    /**
     * Check string#containsIgnoreCase(val);
     */
    describe('#containsIgnoreCase(str)', function () {
        it('should return true when the string contains the given value', function () {
            expect('Bob'.containsIgnoreCase('b')).toBe(true);
        });
        it('should be case insensitive', function () {
            expect('BOB'.containsIgnoreCase('b')).toBe(true);
        });
        it('should have no false positives', function () {
            expect('The quick brown'.containsIgnoreCase('x')).toBe(false);
        });
        it('should respect many characters', function () {
            expect('Franklin'.containsIgnoreCase('ankl')).toBe(true);
        });
        it('should be able to handle spaces', function () {
            expect('The quick brown fox'.containsIgnoreCase('ck bro')).toBe(true);
        });
    });

    /**
     * Check string#replaceAll(oldStr,newStr);
     */
    describe('#replaceAll(oldStr,newStr)', function () {
        it('should return the same string when the replace value does not match anything', function () {
            expect('The quick brown fox'.replaceAll('bob', 'frank')).toBe('The quick brown fox');
        });
        it('should replace one character', function () {
            expect('Bob'.replaceAll('o', 'i')).toBe('Bib');
        });
        it('should replace all instances of a character', function () {
            expect('Bobby'.replaceAll('b', 'd')).toBe('Boddy');
        });
        it('should be case sensitive', function () {
            expect('Box'.replaceAll('b', 'd')).toBe('Box');
        });
        it('should respect spaces', function () {
            expect('Thequickbrownfox', 'The quick brown fox'.replaceAll(' ', '')).toBe('Thequickbrownfox');
        });
        it('should be able to change the first character', function () {
            expect('mitten'.replaceAll('m', 'k')).toBe('kitten');
        });
        it('should respect words', function () {
            expect('baa baa black sheep'.replaceAll('baa', 'meow')).toBe('meow meow black sheep');
        });
    });
});
