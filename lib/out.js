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

/**
 * Library to easily manage output for all JS.
 * 
 * This is meant to be terse and lightweight in order to minimize impact to applications.
 */

'use strict';

require('./stringz');

/**
 * Simple enum to manage log levels.
 * 
 * From most (to least) verbose:
 * 
 * TRACE
 * DEBUG
 * INFO
 * WARN
 * ERROR
 * FATAL
 *  
 */
var LogLevel = {
    TRACE: {
        value: 0,
        fxn: 't',
        name: 'TRACE'
    },
    DEBUG: {
        value: 10,
        fxn: 'd',
        name: 'DEBUG'
    },
    INFO: {
        value: 20,
        fxn: 'i',
        name: 'INFO '
    },
    WARN: {
        value: 30,
        fxn: 'w',
        name: 'WARN '
    },
    ERROR: {
        value: 40,
        fxn: 'e',
        name: 'ERROR'
    },
    FATAL: {
        value: 50,
        fxn: 'f',
        name: 'FATAL'
    }
};

/* Defaults to INFO level */
var __logLevel = LogLevel.INFO;

/**
 * TRACE output - can use t() or trace()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function t(msg) {
    doLog(msg, LogLevel.TRACE);
}

/**
 * DEBUG output - can use d() or debug()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function d(msg) {
    doLog(msg, LogLevel.DEBUG);
}

/**
 * INFO output - can use i() or info()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function i(msg) {
    doLog(msg, LogLevel.INFO);
}

/**
 * WARN output - can use w() or warn()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function w(msg) {
    doLog(msg, LogLevel.WARN);
}

/**
 * ERROR output - can use e() or error()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function e(msg) {
    doLog(msg, LogLevel.ERROR);
}

/**
 * FATAL output - can use f() or fatal()
 * 
 * @param msg => message to output
 * @see doLog()
 */
function f(msg) {
    doLog(msg, LogLevel.FATAL);
}

/**
 * Set the LogLevel, can be used to change the level on the fly.
 * 
 * @param newLevel => new LogLevel to use
 * @see LogLevel
 */
function setLevel(newLevel) {
    __logLevel = newLevel;
}

/**
 * Returns the current LogLevel
 * 
 * @see LogLevel
 */
function atLevel() {
    return __logLevel;
}

/**
 * Main logger, takes a message and a target level, then determines if the 
 * message should be logged.
 * 
 * Logging format is currently: "<ISO Date> [<LEVEL>] message"
 * 
 * @param msg => message to output
 * @param level => level the message should be logged at
 */
function doLog(msg, level) {
    if (__logLevel.value <= level.value) {
        __logger(date() + ' [' + level.name + '] ' + msg);
    }
}

/**
 * Internal function used to output, can be overridden as needed.
 * 
 * This should be set to a function that takes a single message param.
 * It will only be called when the string has been formatted and is of an appropriate level
 * 
 * @see doLog()
 */
var __logger = console.log;

/**
 * Allow for override of the logging functionality, set the logger to whatever function you want.
 * 
 * This should be set to a function that takes a single message param.
 * It will only be called when the string has been formatted and is of an appropriate level
 * 
 * @param fxn => function that takes a single string that is the output to be logged.
 * 
 * @see doLog()
 */
function setLogger(fxn) {
    __logger = fxn;
}

/**
 * ISO Formatted date (set to now)
 * 
 * @returns ISO Formatted date
 */
function date() {
    return (new Date()).toISOString();
}

module.exports = {
    LogLevel: LogLevel,
    level: setLevel,
    atLevel: atLevel,
    t: t,
    trace: t,
    d: d,
    debug: d,
    i: i,
    info: i,
    w: w,
    warn: w,
    e: e,
    error: e,
    f: f,
    fatal: f,
    setLogger: setLogger,
    date: date
};