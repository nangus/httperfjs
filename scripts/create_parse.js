#!/usr/bin/env node

var parser=require('../lib/parser.js');
var readFileSync = require('fs').readFileSync;

var rstub = readFileSync("data/30srp60.out").toString();

var parseme=new parser(rstub);
console.log('test');
