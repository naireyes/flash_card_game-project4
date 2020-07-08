const start = document.querySelector('.start');
const newGame = document.querySelector('.newGame');
const qNA = document.querySelector(".questions");
const choiceA = document.querySelector(".a");
const choiceB = document.querySelector(".b");
const choiceC = document.querySelector(".c");
const choiceD = document.querySelector(".d");

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

const questionIndex = question.length - 1;
let currentQuestion = 0;
let score = 0;

function startQuestion() {
    let quest = questions[currentQuestion];

    question.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;

}

start.addEventListener('click', startTrivia)

function startTrivia() {
    startBox.opacity = 0;
    startQuestion();
    trivia.opacity = 1;
}

function checkAnswer() {
    if (answer == qNA[startQuestion].correctAnswer) {
        score++;
        youGotIt();
    } else {
        youAintGotIt();
    }
    count = 0;
    if (currentQuestion < questionIndex) {
        currentQuestion++;
        startQuestion();
    } else {
        addScore();
    }
}

function youGotIt() {
    let snd = new Audio("applause7.wav");
    snd.play();
}

function youAintGotIt() {
    let snd2 = new Audio("Cough+5.wav")
    snd2.play()
}