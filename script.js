const startButton = document.querySelector('.startButton'); //start
const container = document.querySelector('#container'); //trivia window
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
        choiceC: "c.) Kwanza",
        choiceD: "d.) Rosh Hashanah",
        correctAnswer: "D"
    },
    {
        question: "What was the name of the band Lionel Richie was part of?",
        choiceA: "a.) King Harvest",
        choiceB: "b.) Spectrums",
        choiceC: "c.) Commodores",
        choiceD: "d.) The Marshall Tucker Band",
        correctAnswer: "C"
    },
    {
        question: "Which one of these characters is not friends with Harry Potter?",
        choiceA: "a.) Ron Weasley",
        choiceB: "b.) Neville Longbottom",
        choiceC: "c.) Draco Malfoy",
        choiceD: "d.) Hermione Granger",
        correctAnswer: "C"
    },
    {
        question: "What color is Donald Duck's bowtie?",
        choiceA: "a.) Red",
        choiceB: "b.)Yellow",
        choiceC: "c.)Blue",
        choiceD: "d.)White",
        correctAnswer: "A"
    },
    {
        question: "Which does not appear in the Chinese zodiac?",
        choiceA: "a.) Dragon",
        choiceB: "b.) Rabbit",
        choiceC: "c.)Dog",
        choiceD: "d.)Hummingbird",
        correctAnswer: "D"
    },
    {
        question: "Which country held the 2016 Summer Olympics",
        choiceA: "a.) China",
        choiceB: "b.) Ireland",
        choiceC: "c.) Brazil",
        choiceD: "d.) Italy",
        correctAnswer: "C"
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
        currentQuestion++;
        startQuestion();
    } else {
        showScore();
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

let score = 0;

function showScore() {
    scoreCount.innerHTML = scoreCount + "/" + questionsIndex;
    // if (scoreCount == questions.length - 1) {
    //     winner.style.opacity = 1;
    //     document.querySelector(".level-arena").style.opacity = 0;
    //     let snd = new Audio("applause7.wav");
    //     snd.play();
    // }
}