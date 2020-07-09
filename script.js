const startButton = document.querySelector('.startButton'); //start
const container = document.querySelector('#container'); //quiz
const questionsDiv = document.querySelector(".questions"); //div class questions
const choiceA = document.querySelector(".a");
const choiceB = document.querySelector(".b");
const choiceC = document.querySelector(".c");
const choiceD = document.querySelector(".d");
const startBox = document.querySelector('.startBox');
const winner = document.querySelector('.winner');

let questions = [{
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

startButton.addEventListener('click', startTrivia)

function startTrivia(e) {
    startBox.style.opacity = 0;
    container.style.opacity = 1;
    startQuestion();
}

const questionIndex = questions.length - 1;
let currentQuestion = 0;


function startQuestion() {
    let quest = questions[currentQuestion];

    questionsDiv.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;

}

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correctAnswer) {
        score++;
        youGotIt();
    } else {
        youAintGotIt();
    }

    if (currentQuestion < questionIndex) {
        // count = 0;
        currentQuestion++;
        startQuestion();
    } else {
        showScore();
    }
}

function youGotIt() {
    document.querySelector(currentQuestion).style.background = 'green';
    let snd = new Audio("applause7.wav");
    snd.play();
}

function youAintGotIt() {
    document.querySelector(currentQuestion).style.background = "red";
    let snd2 = new Audio("Cough+5.wav")
    snd2.play()
}

let score = 0;

function showScore() {
    scoreCount += 10;
    score.innerHTML = scoreCount;
    if (scoreCount == questions.length - 1) {
        winner.style.opacity = 1;
        document.querySelector(".level-arena").style.opacity = 0;
        let snd = new Audio("applause7.wav");
        snd.play();
    }
}