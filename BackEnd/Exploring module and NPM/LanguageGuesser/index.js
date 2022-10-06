// const franc = require("franc");
import {franc, francAll} from 'franc';
import langs from 'langs';
const input = process.argv[2];
const langCode = franc(input);
console.log(langs.where('3', langCode).name);