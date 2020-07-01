// * Variables
var start = document.querySelector("#start-button");
var mainText = document.querySelector("#main-text")
var timeEl = document.querySelector("#timer");
var intro = document.querySelector("#intro");
var scorePage = document.querySelector("#scorepage")
var questionAnswer = document.querySelector("#q-and-a");
var viewScores = document.querySelector("#viewHS")
var userScore = document.querySelector("#userscore");
var userInput = document.querySelector("#name").value;
var highScores = document.querySelector("#highscores");
var scores = [];
var submit = document.querySelector("#submit");
var goBack = document.querySelector("#goback");
var clearScores = document.querySelector("#clearscores");
 

var secondsLeft = 75;
var questionIndex = 0;
var timeInterval;


// * Questions array

var questions = [
    {
    question: "How do you join an array into a string?",
    answer: [".join()", "join", "connect", "you can't"],
    correctAnswer: 0,
},
{
    question: "What is the HTML tag that will output the largest header?",
    answer: ["h6", "h3", "h1", "h0"],
    correctAnswer: "2",
},
{
    question: "How do you indicate an id in CSS",
    answer: [".", "id", "-", "#"],
    correctAnswer: "3",
},
{
    question: "How do you start an HTML document?",
    answer: ["html", "<!Doctype>", "!Doctype", "main"],
    correctAnswer: "1",
},
{
    question: "What character points to the entire document in CSS?",
    answer: ["*", "-", "$", "~"],
    correctAnswer: "0",
}
]



// * Functions
// startTimer: begins timer at 75 seconds (secondsLeft) and counts down by 1 and stops at 0
// start quiz- hides intro div, starts timer, and begins questions
// questions: display question and answer choices from questions array. it will need to loop through each answer and create a list item and button for each answer choice. it will also need to check answer to see if it is the correct answer. An incorrect answer decreases the time by 10 seconds. any answer advances to the next question
// stop quiz: the quiz is over when the timer reaches 0 or when there are no more questions. Function will need to hide the questions div and show the high scores page
// get scores: display high scores from local storage
// save scores: saves scores to local storage

// * Step 1
function startTimer() {
    
    timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft <= 0) {
            stopTimer();
            stopQuiz();
            questionAnswer.classList.add("hidden");
            scorePage.classList.remove("hidden");
        }
 
    
    }, 1000)

}

function stopTimer() {
            
    clearInterval(timeInterval);
    
}

function startQuiz() {
    intro.classList.add("hidden");
    
    startTimer();
    showQuestion();
}



function showQuestion() {
    var nextQuestion = questions[questionIndex];
    var questionDiv = document.querySelector("#question");
    var answerDiv = document.querySelector("#answers");
    var showAnswer = document.querySelector("#showAnswer");
    var answerList = document.createElement("ul");
    var listItem;
    var answerButton;

    
    
    
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
        answerButton.addEventListener("click",  function(event) {
            var el = event.target;
            var index = el.getAttribute("data-index");
            
         // conditionals for correct/incorrect answers   
        if (nextQuestion.correctAnswer !== index) {
            showAnswer.textContent = "Wrong";
            secondsLeft-=5;
            answerDiv.innerHTML = " "; // clears answers for next question
        } 
        if (nextQuestion.correctAnswer == index)  {
            showAnswer.textContent = "Correct!";
            answerDiv.innerHTML = " ";
        }
        
    

        questionIndex++;
       
        // loops through questions
        if(questionIndex < questions.length) {
            showQuestion();
            
        } 
        if (questionIndex === questions.length) {
            stopQuiz();
            }
    }); 
    
    
    listItem.appendChild(answerButton); // appends button to <li>
    answerList.appendChild(listItem); // appends list item to <ul>
}

    answerDiv.appendChild(answerList); // appends list into answer div

};



function stopQuiz() {
    intro.classList.add("hidden");
    questionAnswer.classList.add("hidden");
    scorePage.classList.remove("hidden");
    timeEl.classList.add("hidden");

    userScore.textContent = "Your score is " + secondsLeft;

}

function storeScore() {
    var li = document.createElement("li");
    li.textContent = userInput + secondsLeft;

    highScores.appendChild(li);
}

function getScores() {
    localStorage.getItem("scores" || 0);
}


// * on-click events
// One to start quiz: hides intro screen and starts timer
// One to submit high scores and save to local storage
// Go back: returns to intro screen
// Clear high scores: clears high scores from local storage
start.addEventListener("click", startQuiz);

viewScores.addEventListener("click", function () {
    intro.classList.add("hidden");
    highScores.classList.remove("hidden");
});


// 
submit.addEventListener("click", function(event) {
    event.preventDefault();

    
    localStorage.setItem("userInput", userInput);
    
    highScores.classList.remove("hidden");
    scorePage.classList.add("hidden");
    
});

goBack.addEventListener("click", function() {
    intro.classList.remove("hidden");
    highScores.classList.add("hidden");

});

