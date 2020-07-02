# Javascript Quiz

### Overview

The task is to create a dynamic quiz with javascript that gives real-time feedback if the answer is correct or incorrect. The quiz should loop through a list of questions within a certain amount of time. Each incorrect answer deducts time off the timer and the final time is the user's score. For example, if the time is up before the user completes the quiz, the score is 0. If the user has 15 seconds left, the score is 15. 

The quiz allows the user to save high scores and view a list of previous high scores.

### Steps

In HTML, I created empty sections for the questions, submission page, and the high score page. This is so I could dynamically create HTML with javascript.

In the javascript code, I created variables that pointed to each HTML section to needed to be created and I also created global variables that were going to be used in multiple functions.

I created the following functions:
- Start timer
- Start Quiz
- Stop Quiz
- Show Next Question
- Check Answer
- Save Scores
- Get Scores
- Show Scores

I also needed to create the following click events:

- Start game
- View high scores
- Submit score
- Clear scores
- Go back

### Links
[GitHub](https://github.com/kimberlyj227/code-quiz)
[GitHub Live Site](https://kimberlyj227.github.io/code-quiz/)

### Example

![Example](/Assets/code-quiz.gif)




