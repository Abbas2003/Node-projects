#! /usr/bin/env node

// Quiz System

import inquirer from "inquirer";
import chalk from "chalk";

console.log('\t\tWelcome to Quiz System');
console.log('\t\t----------------------');

// Question Interface
interface Question {
    questionText: string;
    options: string[];
    correctAnswer: string;
}

// Questions
const questions: Question[] = [
    {
        questionText: 'What is the capital of Pakistan?',
        options: ['Karachi','Peshawar','Islamabad','Lahore'],
        correctAnswer: 'Islamabad'
    },
    {
        questionText: 'Which is the national language of Pakistan?',
        options: ['Sindhi','Pashto','Punjabi','Urdu'],
        correctAnswer: 'Urdu'
    },
    {
        questionText: 'How many provincess are there in Pakistan?',
        options: ['Two','Four','One','Five'],
        correctAnswer: 'Four'
    },
    {
        questionText: 'What is the national game of Pakistan?',
        options: ['Hockey','Football','Cricket','Chess'],
        correctAnswer: 'Hockey'
    },
];

// Quiz Class
class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number;
    private score: number;

    constructor(questions: Question[]) {
        // this.questions = Math.floor(Math.random() * questions);
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    };

    // Get the current question
    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    };

    // Checking if quiz is ended
    isQuizEnd(): boolean {
        return this.currentQuestionIndex === this.questions.length;
    }

    // Submitting answer
    submitAnswer(answer: string) {
        const currentQuestion = this.getCurrentQuestion();

        if (currentQuestion.correctAnswer === answer) {
            this.score++;
        };

        this.currentQuestionIndex++;
    };

    

    // Get the quiz result 
    getQuizResult(): string {
        const totalQuestion = this.questions.length;
        const correctAnswers = this.score;

        if(correctAnswers <= 2) {
            console.log(chalk.red('Nalaik Kahen ke'));
        } 
        else if(correctAnswers > 2) {
            console.log(chalk.magenta('Fabulous'));
        }
        

        return chalk.greenBright(`You scored ${correctAnswers} from ${totalQuestion}`);
    };
    

    // Run the quiz
    async runQuiz() {
        while(!this.isQuizEnd()) {
            const currentQuestion = this.getCurrentQuestion();

            const answer = await inquirer.prompt([
                {
                    name: 'choice',
                    type: 'list',
                    message: chalk.white(currentQuestion.questionText),
                    choices: currentQuestion.options
                },
            ]);

            this.submitAnswer(answer.choice);
        }

        // Display quiz result
        console.log(this.getQuizResult());
        
    };
};

// Creating object/instance of quiz
const quiz = new Quiz(questions);

// Start the quiz
quiz.runQuiz();


