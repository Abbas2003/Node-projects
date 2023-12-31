#!/usr/bin/env node
// Countdown Timer
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// new Date object
let dateObject = new Date();
// current Date
let date = "0" + dateObject.getDate();
// Current month
let month = "0" + (dateObject.getMonth() + 1);
// Current year
let year = dateObject.getFullYear();
// Current hours
let hours = dateObject.getHours();
// Current minutes
let minutes = dateObject.getMinutes();
// Current seconds
let seconds = dateObject.getSeconds();
// Displaying Time
console.log(`Time: ${hours}:${minutes}:${seconds}`);
// Displaying Date
console.log(`Date: ${date}-${month}-${year}`);
console.log("Select time zone in which you have to set timer");
console.log("1. Hours");
console.log("2. Minutes");
console.log("3. Seconds");
let choice = prompt("");
if (choice === "3") {
    const answer = await inquirer.prompt({
        type: "number",
        name: "userInput",
        message: "How many seconds you want to have timer?",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Seconds must be in 60";
            }
            else {
                return true;
            }
        },
    });
    let input = answer.userInput;
    function startTimerInSeconds(val) {
        const initTime = new Date().setSeconds(new Date().getSeconds() + val);
        const intervalTime = new Date(initTime);
        setInterval(() => {
            const currentTime = new Date();
            const timeDiff = differenceInSeconds(intervalTime, currentTime);
            if (timeDiff <= 0) {
                console.log("Timer Finish");
                process.exit();
            }
            const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
            const sec = Math.floor(timeDiff % 60);
            console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        }, 1000);
    }
    startTimerInSeconds(input);
}
else if (choice === "2") {
    const answer = await inquirer.prompt({
        type: "number",
        name: "userInput",
        message: "How many minutes you want to have timer?",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Minutes must be in 60";
            }
            else {
                return true;
            }
        },
    });
    let input = answer.userInput;
    function startTimerInMinutes(minutes) {
        const initialTime = new Date().getTime() + minutes * 60 * 1000; // Convert minutes to milliseconds
        const intervalTime = new Date(initialTime);
        const intervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiff = intervalTime.getTime() - currentTime;
            if (timeDiff <= 0) {
                clearInterval(intervalId); // Stop the timer when it reaches zero
                console.log("Timer Finish");
                process.exit();
            }
            const remainingMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
            const remainingSeconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
            console.log(`${remainingMinutes.toString().padStart(2, "0")}:${remainingSeconds
                .toString()
                .padStart(2, "0")}`);
        }, 1000);
    }
    startTimerInMinutes(input);
}
else if (choice === "1") {
    const answer = await inquirer.prompt({
        type: "number",
        name: "userInput",
        message: "How many minutes you want to have timer?",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Minutes must be in 60";
            }
            else {
                return true;
            }
        },
    });
    let input = answer.userInput;
    function startTimerInHours(hours) {
        const initialTime = new Date().getTime() + hours * 60 * 60 * 1000; // Convert hours to milliseconds
        const intervalTime = new Date(initialTime);
        const intervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiff = intervalTime.getTime() - currentTime;
            if (timeDiff <= 0) {
                clearInterval(intervalId); // Stop the timer when it reaches zero
                console.log("Timer Finish");
                process.exit();
            }
            const remainingHours = Math.floor(timeDiff / (60 * 60 * 1000));
            const remainingMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
            const remainingSeconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
            console.log(`${remainingHours.toString().padStart(2, "0")}:${remainingMinutes
                .toString()
                .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`);
        }, 1000);
    }
    startTimerInHours(input);
}
