// * Variables
var start = document.querySelector("#start-button");
var mainText = document.querySelector("#main-text")
var timeEl = document.querySelector("timer");

var secondsLeft = 75;

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
// function setTime() {
//     var timeInterval = setInterval(function() {
//         secondsLeft --;
//         timeEl.textContent = "Timer: " + secondsLeft;

//         if (secondsLeft === 0) {
//             clearInterval(timeInterval);
//         }


//     }, 1000)
// }

// * on-click actions
// start.addEventListener("click", );

