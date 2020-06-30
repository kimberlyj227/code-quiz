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
}
]



// * Functions
function showQuestion() {
    var nextQuestion = questions[questionIndex];

    var questionDiv = document.querySelector("#question");
    var answerDiv = document.querySelector("#answers");
    var showAnswer = document.querySelector("#showAnswer");

    questionDiv.textContent = nextQuestion.question;

    var answerList = document.createElement("ul");
    var listItem;
    var answerButton;

    function checkAnswer() {

        // ! WORK THIS
        console.log(nextQuestion.answer[0]);
        console.log(nextQuestion.correctAnswer);
            
        for (var i = 0; i < nextQuestion.answer.length; i++) {
            if (nextQuestion.answer[i] === nextQuestion.correctAnswer) {
                showAnswer.textContent = "Correct";
        } 
        else {
            showAnswer.textContent = "Wrong";
            // secondsLeft-= 10;
        }
        }
    }   
        
    

    
    for (var i = 0; i < nextQuestion.answer.length; i++) {
        listItem = document.createElement("li");
        answerButton = document.createElement("button");
        answerButton.textContent = nextQuestion.answer[i];
        answerButton.addEventListener("click", checkAnswer);

        listItem.appendChild(answerButton);
        answerList.appendChild(listItem);
    }
    
    answerDiv.appendChild(answerList);

    
};


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

function stopQuiz() {
    
}

function saveScore() {

}

function getScores() {

}


// * on-click actions
start.addEventListener("click", startQuiz);

