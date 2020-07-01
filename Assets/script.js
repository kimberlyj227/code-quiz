// * Variables
var start = document.querySelector("#start-button");
var mainText = document.querySelector("#main-text")
var timeEl = document.querySelector("#timer");
var intro = document.querySelector("#intro");
var scorePage = document.querySelector("#scorepage")
var questionAnswer = document.querySelector("#q-and-a");
 

var secondsLeft = 75;
var questionIndex = 0;

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
    
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        
        function stopTimer() {
            
            clearInterval(timeInterval);
            
        }
        if (secondsLeft === 0) {
            stopTimer();
            questionAnswer.classList.add("hidden");
            scorePage.classList.remove("hidden");

        }
        
    
    }, 1000)

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
    
    questionDiv.textContent = nextQuestion.question;
    
    for (var i = 0; i < nextQuestion.answer.length; i++) {
        listItem = document.createElement("li"); // create list item
        answerButton = document.createElement("button"); // create button that is inside list item
        answerButton.setAttribute("data-index", i); // gives each list item an index
        answerButton.textContent = nextQuestion.answer[i]; // populates button with each answer in array

        // checks if answer is correct
        answerButton.addEventListener("click",  function(event) {
            var el = event.target;
            var index = el.getAttribute("data-index");
            console.log(index)
            console.log(nextQuestion.correctAnswer)
            
        if (nextQuestion.correctAnswer !== index) {
            showAnswer.textContent = "Wrong";
            secondsLeft-=5;
            answerDiv.innerHTML = " ";
        } 
        if (nextQuestion.correctAnswer == index)  {
            showAnswer.textContent = "Correct!";
            answerDiv.innerHTML = " ";
        }

        questionIndex++;
        showQuestion();
        
    }); 
    
        listItem.appendChild(answerButton); // appends button to list item
        answerList.appendChild(listItem); // appends list item to answer div
    }
    
        
    

    answerDiv.appendChild(answerList);
    
};



function stopQuiz() {
    
}

function saveScore() {

}

function getScores() {
    // scores = JSON.parse(localStorage.getItem("scores" || []));
}


// * on-click events
// One to start quiz: hides intro screen and starts timer
// One to submit high scores and save to local storage
// Go back: returns to intro screen
// Clear high scores: clears high scores from local storage
start.addEventListener("click", startQuiz);

