class Questions {
    constructor() {
        this.questions = questions;
        this.choices = [];
        this.correctAnswer = correctAnswer;
    }
    pushChoices()

}

myQuestions = new Questions1("What is the name for the Jewish New Year?", [{
    a: "Hannukah",
    b: "Yum Kippur",
    c: "Kwanza",
    d: "Rosh Hashanah"
}], "d")
myQuestions = new Questions2("How many blue stripes are there on the U.S. flag?", [{
    a: 6,
    b: 7,
    c: 13,
    d: 1
}], c)
myQuestions = new Questions3("Which one of these characters is not friends with Harry Potter?", [{
    a: "Ron Weasley",
    b: "Neville Longbottom",
    c: "Draco Malfoy",
    d: "Hermione Granger"
}], c)


function start() {
    //addEventlistener to start button
    let startButton = document.querySelector('.start');
    startButton.addEventListener('click', questions())



    function reset() {
        //This will run the start function
    }

    function questions() {
        //When start button is pressed start with question 1

    }

    function answer() {
        //get input from user for answer, if answer is not correctAnswer, run wrong answer function, 
        // if correct answer is guessed, go to the next question

    }

    function wrongAnswer()
    //this will turn on sound 

    function score() {
        //if correct answer = correctAnswer run score function
    }



    //If answer is correct **
    //if answer is wrong **