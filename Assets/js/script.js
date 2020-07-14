// * Variables
// intro and header
var start = document.querySelector("#start-button");
var mainText = document.querySelector("#main-text")
var intro = document.querySelector("#intro");
var viewScores = document.querySelector("#viewHS")
// timer
var timeEl = document.querySelector("#timer");
var timeInterval;
var secondsLeft = 75;
// quiz
var questionAnswer = document.querySelector("#q-and-a");
var questionIndex = 0;
var answerDiv = document.querySelector("#answers");
// enter scores
var scorePage = document.querySelector("#scorepage")
var userScore = document.querySelector("#userscore");
var submit = document.querySelector("#submit");


// view high scores
var highScoresDiv = document.querySelector("#highscores");
var goBack = document.querySelector("#goback");
var clearScores = document.querySelector("#clearscores");
var highScoresArray;
var scoreIndex = 0;


// * Questions array
var questions = [{
        question: "How do you join an array into a string?",
        answer: [".join()", "join", "connect", "you can't"],
        correctAnswer: 0,
    },
    {
        question: "What is the HTML tag that will output the largest header?",
        answer: ["h6", "h3", "h1", "h0"],
        correctAnswer: 2,
    },
    {
        question: "How do you indicate an id in CSS",
        answer: [".", "id", "-", "#"],
        correctAnswer: 3,
    },
    {
        question: "How do you start an HTML document?",
        answer: ["html", "<!Doctype>", "!Doctype", "main"],
        correctAnswer: 1,
    },
    {
        question: "What character points to the entire document in CSS?",
        answer: ["*", "-", "$", "~"],
        correctAnswer: 0,
    },
    {
        question: "Javascript is awesome!",
        answer: ["true", "false"],
        correctAnswer: 0,
    },
    {
        question: "What CANNOT be stored in an array?",
        answer: ["objects", "strings", "numbers", "none of the above"],
        correctAnswer: 3,
    }
]

// * Functions
// startTimer: begins timer at 75 seconds (secondsLeft) and counts down by 1 and stops at 0
// start quiz- hides intro div, starts timer, and begins questions
// questions: display question and answer choices from questions array. it will need to loop through each answer and create a list item and button for each answer choice. it will also need to check answer to see if it is the correct answer. An incorrect answer decreases the time by 10 seconds. any answer advances to the next question
// stop quiz: the quiz is over when the timer reaches 0 or when there are no more questions. Function will need to hide the questions div and show the high scores page
// get scores: display high scores from local storage
// save scores: saves scores to local storage


function startTimer() {

    timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft <= 0 || questionIndex === 0) {
            stopTimer();
            stopQuiz();

        }


    }, 1000)

}

function stopTimer() {

    clearInterval(timeInterval);

}

function startQuiz() {
    intro.classList.add("hidden");

    getScores();
    startTimer();
    showQuestion();
}


function showQuestion() {
    var nextQuestion = questions[questionIndex];
    var questionDiv = document.querySelector("#question");
    var answerList = document.createElement("ul");
    var listItem;
    var answerButton;

    questionDiv.textContent = nextQuestion.question;

    // loops through each question
    for (var i = 0; i < nextQuestion.answer.length; i++) {
        listItem = document.createElement("li"); // create list item
        answerButton = document.createElement("button"); // create button that is inside list item
        answerButton.setAttribute("data-index", i); // gives each list item an index
        answerButton.textContent = nextQuestion.answer[i]; // populates button with each answer in array

        // displays each question 
        if (questionIndex < questions.length) {
            questionDiv.textContent = nextQuestion.question;
        }

        // checks if answer is correct when user clicks on button
        answerButton.addEventListener("click", function (event) {
            event.preventDefault();
            checkAnswer(event, nextQuestion);
        });


        listItem.appendChild(answerButton); // appends button to <li>
        answerList.appendChild(listItem); // appends list item to <ul>
    }

    answerDiv.appendChild(answerList); // appends list into answer div
    questionIndex++; // update questions index

    if (questionAnswer.classList.contains("hidden")) {
        questionAnswer.classList.remove("hidden");
    }

};

function checkAnswer(event, nextQuestion) {

    var el = event.target;
    var index = parseInt(el.getAttribute("data-index"));
    var showAnswer = document.querySelector("#showAnswer");


    // conditionals for correct/incorrect answers   
    if (nextQuestion.correctAnswer !== index) {
        showAnswer.textContent = "Wrong";
        secondsLeft -= 5;

    } else {
        showAnswer.textContent = "Correct!";

    }

    setTimeout(function () {
        answerDiv.innerHTML = "";
        // debugger;
        if ((secondsLeft === 0) || questionIndex === questions.length) {
            stopQuiz();
        } else {
            showQuestion();
        }

    }, 1000);

}



function stopQuiz() {
    intro.classList.add("hidden");
    questionAnswer.classList.add("hidden");
    scorePage.classList.remove("hidden");
    timeEl.classList.add("hidden");
    questionIndex = 0;
    stopTimer();


    userScore.textContent = "Your score is " + secondsLeft;

}


function saveScore() {
    var userInput = document.querySelector("#name").value;
    var newScore = {
        name: userInput,
        score: secondsLeft
    };

    highScoresArray.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScoresArray));
}


function getScores() {

    highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];

}

function showHighScores() {
    var hallOfFame = document.querySelector("#halloffame");
    hallOfFame.innerHTML = "";

    for (var i = 0; i < highScoresArray.length; i++) {
        var score = `${highScoresArray[i].name} : ${highScoresArray[i].score}`;
        var li = document.createElement("li");
        li.textContent = score;
        hallOfFame.appendChild(li);
    }

}


// * on-click events
// start quiz: hides intro screen and starts timer
start.addEventListener("click", startQuiz);

// click "view high scores" takes you to high scores page
viewScores.addEventListener("click", function () {
    if (questionIndex > 0) {
        return 
    }
    intro.classList.add("hidden");
    highScoresDiv.classList.remove("hidden");
    getScores();
    showHighScores();
});

// add scores to local storage on click of submit button
submit.addEventListener("click", function (event) {
    event.preventDefault();

    saveScore();
    showHighScores();

    highScoresDiv.classList.remove("hidden");
    scorePage.classList.add("hidden");

});

// Clear high scores: clears high scores from local storage
clearScores.addEventListener("click", function () {
    localStorage.clear();
    document.querySelector("#halloffame").innerHTML = "";
});

// Go back: returns to intro screen
goBack.addEventListener("click", function () {
    intro.classList.remove("hidden");
    highScoresDiv.classList.add("hidden");
    questionIndex = 0;
    secondsLeft = 75;
    // timeInterval;
    console.log(questionIndex);
    console.log(secondsLeft);
});