#!/usr/bin/env node
import inquirer from "inquirer";

let userInput=await inquirer.prompt([
    {
        name: "word",
        type: "input",
        message: "Enter any sentence or word: "
    }
]);

let word=userInput.word;
let wordCount=word.split(" ").length;
console.log(`The Sentence "${word}" has ${wordCount} words`);