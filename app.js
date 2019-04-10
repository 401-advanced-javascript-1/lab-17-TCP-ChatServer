'use strict';

const fs = require('fs');
const net = require('net');
const util = require('util');

//Promisify alterfile components
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Setup client connection
const client = new net.Socket();
client.connect(3001, 'localhost', () => {});

//Define functions
const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const convert = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  return read(file)
    .then(buffer => convert(buffer))
    .then(buffer => write(file, buffer))
    .then( success => client.write(`save Saved: ${file}`))
    .catch( error => client.write(`error Error: ${error.message}`));
};

//
let file = process.argv.slice(2).shift();
alterFile(file).then(() => client.end());
