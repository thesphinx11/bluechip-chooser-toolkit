const bluechip_query_tool = require('bluechip-query-tool');
const bluechip_chooser_toolkit = require('bluechip-chooser-toolkit');
const validator = require('validator');
const body_parser = require('body-parser');
const eslint = require('eslint');
const jsonwebtoken = require('jsonwebtoken');
const async = require('async');
const socket.io = require('socket.io');
const ganache_cli = require('ganache-cli');
const ethereumjs_util = require('ethereumjs-util');
const moment = require('moment');
const dotenv = require('dotenv');
const web3_utils = require('web3-utils');
const truffle = require('truffle');
const sequelize = require('sequelize');
const mysql = require('mysql');

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const john = new Person('John', 30);
john.greet();

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts', res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

const greet = name => console.log(`Hello, ${name}!`);
greet('Node.js');

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'password');
let decrypted = decipher.update('5d41402abc4b2a76b9719d911017c592', 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted text:', decrypted);

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(7));