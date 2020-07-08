class Questions {
    constructor(questions, choices, correctAnswer) {
        this.questions = questions;
        this.choices = [{}];
        this.correctAnswer = correctAnswer;
    }
    startQuestions() {

    }
    pushChoices(choices) {

    }

}
myQuestions1 = new Questions("What is the name for the Jewish New Year?", [{
    a: "Hannukah",
    b: "Yum Kippur",
    c: "Kwanza",
    d: "Rosh Hashanah"
}], "d")
myQuestions2 = new Questions("How many blue stripes are there on the U.S. flag?", [{
    a: 6,
    b: 7,
    c: 13,
    d: 1
}], "c")
myQuestions3 = new Questions("Which one of these characters is not friends with Harry Potter?", [{
    a: "Ron Weasley",
    b: "Neville Longbottom",
    c: "Draco Malfoy",
    d: "Hermione Granger"
}], "c")

console.log(myQuestions1);


function start() {
    //addEventlistener to start button
    let startButton = document.querySelector('.start');
    startButton.addEventListener('click', questions())
}



function reset() {
    //This will run the start function
};

function questions() {
    //When start button is pressed start with question 1
    this.questions;

};

function answer() {
    //get input from user for answer, if answer is not correctAnswer, run wrong answer function, 
    // if correct answer is guessed, go to the next question


};

function wrongAnswer() {}
//this will turn on sound 