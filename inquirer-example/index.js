import inquirer from "inquirer";
// const inquirer = require('inquirer');
// await inquirer
//   .prompt([
//     {
//       name: "faveReptile",
//       message: "What is your favorite reptile?",
//       default: "Snake",
//     },
//     {
//       name: "FavColor",
//       message: "What's your favourite Color?",
//       default: "#008f68",
//     },
//     {
//       type: 'list',
//       name: 'Fruits',
//       message: "Which is your favourite fruit?",
//       choices: ['Apple','Mango','Orange','Banana','Strawberry']
//     },
//     {
//       type: 'rawlist',
//       name: 'Cars',
//       message: "Which one is your favourite car?",
//       choices: ['BMW','Mercedes','Kia','Mustang']
//     }
//   ])
//   .then((answers) => {
//     console.info("Answer:", answers.faveReptile);
//     console.info("Answer:", answers.FavColor);
//     console.info("Answer:", answers.Fruits);
//     console.info("Answer:", answers.Cars);
//   });
// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });
// inquirer
//   .prompt([
//     {
//       type: 'expand',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: [
//         {
//           key: 'a',
//           value: 'alligator',
//         },
//         {
//           key: 'c',
//           value: 'crocodile',
//         },
//       ],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });
// inquirer
// .prompt([
//   {
//     type: 'checkbox',
//     name: 'reptiles',
//     message: 'Which reptiles do you love?',
//     choices: [
//       'Alligators', 'Snakes', 'Turtles', 'Lizards',
//     ],
//   },
// ])
// .then(answers => {
//   console.info('Answer:', answers.reptiles);
// });
// await inquirer
// .prompt([
//   {
//     type: 'password',
//     name: 'secret',
//     message: 'Tell me a secret',
//   },
// ])
// .then(answers => {
//   // Displaying the password for debug purposes only.
//   console.info('Answer:', answers.secret);
// });
// inquirer
// .prompt([
//   {
//     type: 'editor',
//     name: 'story',
//     message: 'Tell me a story, a really long one!',
//   },
// ])
// .then(answers => {
//   console.info('Answer:', answers.story);
// });
// inquirer
// .prompt([
//   {
//     type: 'list',
//     name: 'contactSupport',
//     message: 'How do you want to contact support?',
//     choices: [
//       'By email',
//       'By phone',
//       {
//         name: 'By fax',
//         disabled: 'Not supported anymore',
//       },
//       new inquirer.Separator(),
//       'Have our agents call you',
//     ],
//   },
// ])
// .then(answers => {
//   console.info('Your answer are :', JSON.stringify(answers));
// });
// inquirer
// .prompt([
//   {
//     type: 'rawlist',
//     name: 'contactSupport',
//     message: 'How do you want to contact support?',
//     default: 'By phone',
//     choices: [
//       'By email',
//       'By phone',
//       'Have our agents call you',
//     ],
//   },
// ])
// .then(answers => {
//   console.info('Your answer are :', JSON.stringify(answers));
// });
// inquirer
// .prompt([
//   {
//     type: 'checkbox',
//     name: 'support',
//     message: 'Select your contact support preferences?',
//     choices: [
//       {
//         name: 'By email',
//       },
//       {
//         name: 'By chat',
//         checked: false,
//       },
//       {
//         name: 'By phone',
//         checked: true,
//       },
//       {
//         name: 'Have our agents call',
//       },
//     ],
//   },
//   {
//     type: 'confirm',
//     name: 'contactByEmail',
//     message: 'Do you want to be contacted by email',
//     default: false,
//   },
// ])
// .then(answers => {
//   console.info('Your answer are :', JSON.stringify(answers));
// });
// inquirer
// .prompt([
//   {
//     type: 'confirm',
//     name: 'contactByEmail',
//     message: 'Do you want to be contacted by email',
//     default: false,
//   },
// ])
// .then(answers => {
//   console.info('Your answer are :', JSON.stringify(answers));
// });
// const requireLetterAndNumber = (value: string) => {
//   if (/\w/.test(value) && /\d/.test(value)) {
//     return true;
//   }
//   return "Password need to have at least a letter and a number";
// };
// inquirer
//   .prompt([
//     {
//       type: "password",
//       message: "Enter a masked password",
//       name: "password",
//       mask: "*",
//       validate: requireLetterAndNumber,
//     },
//   ])
//   .then((answers) => {
//     console.info("Your answer are :", JSON.stringify(answers));
//   });
// function countCharactersAndWords(paragraph: string): void {
//   // Counting characters
//   const charCount = paragraph.replace(/\s/g, '').length;
//   // Counting words
//   const words = paragraph.trim().split(/\s+/);
//   const wordCount = words.length;
//   console.log(`Character count (excluding whitespaces): ${charCount}`);
//   console.log(`Word count: ${wordCount}`);
// }
// // Example input paragraph
// const inputParagraph = "This is an example paragraph with some words.";
// // Call the function with the input paragraph
// countCharactersAndWords(inputParagraph);
const enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
const enemy = enemies[Math.floor(Math.random() * enemies.length)];
// console.log(enemy);
const maxEnemyHealth = 75;
let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
// console.log(enemyHealth);
let x = enemies[(Math.floor(Math.random() * enemies.length))];
// console.log(x);
// #! /usr/bin/env
// import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright `░█░█░█▀▀░█░░░█▀▀░█▀█░█▄█░█▀▀░░░█░█░█▀█░█░█░█▀▄░░░█▀█░▀█▀░█▄█
░█▄█░█▀▀░█░░░█░░░█░█░█░█░█▀▀░░░░█░░█░█░█░█░█▀▄░░░█▀█░░█░░█░█
░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░░░▀░▀░░▀░░▀░▀`);
let user = {
    name: "Syeda Ujla",
    Pin: 1001,
    balance: 200000,
};
const resp = await inquirer.prompt([
    {
        message: "kindly enter your pin",
        name: "Pin",
        type: "Password"
    }
]);
console.log("resp:", resp);
if (Number(resp.Pin) != user.Pin) {
    console.log("you have enter incorrect Pin");
}
else {
    const resp = await inquirer.prompt([
        {
            name: "SelectType",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "Transfer", "CheckBalance"]
        },
        {
            name: "Amount",
            message: "kindly select amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10,000", "other Transaction"],
            when(resp) {
                console.log("resp >>", resp.SelectType);
                return resp.SelectType === 'withdraw';
            }
        },
        {
            name: "Transfer",
            message: "please enter amount",
            when(resp) {
                return resp.SelectType == 'Transfer';
            }
        },
        {
            name: "Withdraw",
            message: "please enter amount",
            when(resp) {
                return resp.SelectType == 'withdraw';
            }
        },
        {
            name: "Checkbalance",
            message: "please enter amount",
            when(resp) {
                return resp.SelectType == 'Checkbalance';
            }
        },
        //    console.log("resp.SelectType")
    ]);
    // console.log('SelectType:' , resp )
    if (resp.SelectType == "CheckBalance") {
        console.log(`your balance is ${user.balance}`);
    }
    else if (resp.SelectType == "Transfer") {
        user.balance = user.balance - resp.Amount;
        console.log(`your new balance is ${user.balance}`);
    }
    else {
        console.log("Khtm Finish TaTa BYE Bye");
    }
}
