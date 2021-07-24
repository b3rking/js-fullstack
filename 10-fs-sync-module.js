const {readFileSync, writeFileSync} = require('fs')

// import { readFileSync, writeFileSync } from 'fs'

// read file
const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first);
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second);

// write file

writeFileSync('./content/learning.txt', 
            `here all the content ${first} and ${second}`,
            {flag: 'a'})