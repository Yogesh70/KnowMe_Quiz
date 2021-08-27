const readlineSync = require('readline-sync');
const chalk = require('chalk');
const { red } = require('chalk');

const user = readlineSync.question(chalk.cyan('Enter your name? '));

const welcomeMsg = 'Welcome ' + chalk.bgWhite.black(user) + ' to the quiz' + chalk.bold.yellow(' HOW WELL DO YOU KNOW ME ');
console.log(chalk.green(welcomeMsg));

let score = 0;

let questionsBank = [
  {
    question: 'Where is my HomeTown? ',
    answer: 'rohtak'
  }, {
    question: 'What is my majors in underGrad? ',
    answer: 'IT'
  }, {
    question: 'Who is my favourite English Rapper? ',
    answer: 'eminem'
  }, {
    question: 'Which is my favourite sports? ',
    answer: 'cricket'
  }, {
    question: 'Which is my favourite book? ',
    answer: 'stevejobs'
  }, {
    question: 'Which is my favourite Avengers SuperHero? ',
    answer: 'Dr. Strange'
  }, {
    question: 'What type of music do I like? ',
    answer: 'Rap'
  }, {
    question: 'What typae of food I love the most? ',
    answer: 'indian'
  }, {
    question: 'Choose one: cats/dogs? ',
    answer: 'dogs'
  }, {
    question: `Choose one: chocolate/icecream? `,
    answer: 'icecream'
  }
]

function play(question, answer) {
  let userAns = readlineSync.question(chalk.bgCyan.black(question));

  if (userAns === answer) {
    console.log(chalk.bgGreen.black('You are Right :)'));
    score++;
  }
  else {
    console.log(chalk.bgRed.black('Sorry, you are Wrong ):'));
    console.log('Correct answer: ' + chalk.bold.magenta(answer))
  }

  console.log(chalk.yellow('Current Score: ' + score));

  console.log(`------------------`);
}

for (let i = 0; i < questionsBank.length; i++) {
  let currQues = questionsBank[i];
  play(currQues.question, currQues.answer);
}

console.log('**********************');

console.log('Yay you have successfully completed the Quiz!');
console.log(chalk.bgMagenta.black('Final score: ' + score));

let highestScore = [
  {
    name: "Yogesh",
    score: "8"
  }, {
    name: "Rahul",
    score: "6"
  }, {
    name: "Rohit",
    score: "4"
  }
]

console.log('Check out the HighestScores: ');
highestScore.map(score => console.log(score.name + ": " + score.score));
console.log('If you have scored the highest, DM me with SS ');
