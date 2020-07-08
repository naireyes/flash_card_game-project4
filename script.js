const question = document.querySelector(".questions");
const choiceA = document.querySelector(".a");
const choiceB = document.querySelector(".b");
const choiceC = document.querySelector(".c");
const choiceD = document.querySelector(".d");
const start = document.querySelector('.start');
const newGame = document.querySelector('.newGame');


let qNA = [{
        question: "What is the name for the Jewish New Year?",
        choiceA: "a.) Hannukah",
        choiceB: "b.) Yum Kippur",
        ChoiceC: "c.) Kwanza",
        ChoiceD: "d.) Rosh Hashanah",
        correctAnswer: "d"
    },
    {
        question: "What was the name of the band Lionel Richie was part of?",
        ChoiceA: "a.) King Harvest",
        ChoiceB: "b.) Spectrums",
        ChoiceC: "c.) Commodores",
        ChoiceD: "d.) The Marshall Tucker Band",
        correctAnswer: "c"
    },
    {
        question: "Which one of these characters is not friends with Harry Potter?",
        ChoiceA: "Ron Weasley",
        ChoiceB: "Neville Longbottom",
        ChoiceC: "Draco Malfoy",
        ChoiceD: "Hermione Granger",
        correctAnswer: "c"
    }
];
console.log(qNA[0]);


// function start() {
//     //addEventlistener to start button
//     let startButton = document.querySelector('.start');
//     startButton.addEventListener('click', Questions.startQuestions())
// }



// function reset() {
//     //This will run the start function
// };

// function questions() {
//     //When start button is pressed start with question 1
//     this.questions;

// };

// function answer() {
//     //get input from user for answer, if answer is not correctAnswer, run wrong answer function, 
//     // if correct answer is guessed, go to the next question


// };

// function wrongAnswer() {}
// //this will turn on sound 