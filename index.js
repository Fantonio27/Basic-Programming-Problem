import { Calendar } from "./printCalendar.js"

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please input a year? `, year => {
  Calendar(year)
  rl.close();
});
