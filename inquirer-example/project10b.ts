import PromptSync from "prompt-sync";
import { Person,Student,ans } from "./project10a.js";


const prompt = PromptSync();

try{

    let input = prompt("Type 1 if you like to talk to others and Type 2 if you rather keep to yourself: ");
    let myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log(`You are ${myPerson.getPersonality()}`);
    const person = new Person();
    // console.log(person);
    const myStudent = new Student();
    myStudent.Name = ans.Name;
    console.log(`Student Name: ${myStudent.Name}`);
    console.log(`Personality: ${myStudent.getPersonality()}`);

    
} catch{
    console.log("Please type valid number");
    
}