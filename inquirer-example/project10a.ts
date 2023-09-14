#!/usr/bin/env node

import inquirer from "inquirer";

class Person {
    private personality;
    students: Student[] = [];

    constructor() {
        this.personality = "Mystery"
    }

    public askQuestion(answer: number) {
        if(answer === 1){
            this.personality = 'Extrovert';
        }
        else if(answer === 2){
            this.personality = 'Introvert';
        }
        else{
            this.personality = 'Still a mystery';
        }
    }

    public getPersonality() {
        return this.personality;
    }


}


class Student extends Person {
    private _name: string;
  
    constructor() {
      super();
      this._name = "-";
    }
  
    public get Name() {
      return this._name;
    }
  
    public set Name(value: string) {
      this._name = value;
    }
  }
  
const ans =  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
      },
    ])
    // .then((answers) => {
    //   const MyStudent = new Student();
    //   MyStudent.Name = answers.name;
  
    //   // Access the student's name and personality here
    //   console.log(`Student Name: ${MyStudent.Name}`);
    //   console.log(`Personality: ${MyStudent.getPersonality()}`);
  
    // });
// ans.name



// import PromptSync from "prompt-sync";


// const prompt = PromptSync();

// try{

//     let input = prompt("Type 1 if you like to talk to others and Type 2 if you rather keep to yourself: ");
//     let myPerson = new Person();
//     myPerson.askQuestion(parseInt(input));
//     console.log(`You are ${myPerson.getPersonality()}`);
//     const person = new Person();
//     // console.log(person);
//     const myStudent = new Student();
//     myStudent.Name = ans.Name;
//     console.log(`Student Name: ${myStudent.Name}`);
//     console.log(`Personality: ${myStudent.getPersonality()}`);

    
// } catch{
//     console.log("Please type valid number");
    
// }

export{Person,Student,ans}

