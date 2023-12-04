/* We want to build a timed coding quiz with multiple-choice questions. 
- Creating a timer that counts down will be the first thing. 
- Then we need to create an if statement that says if wrong answer is selected then 5 seconds is taken off the time.
- Also need to create multiple buttons that can be selected to choose an answer from an array an answers.
-We'll also want a function that stores high scores to localStorage so each time the quiz is taken, scores can be compared. We'll also want if statements that say if a score is higher than previous scores, put it higher up in the list. If lower then ...
Questions are about JS fundamentals!
*/
const quizHomepage = document.getElementById("start-screen");
const quizResult = document.getElementById("end-screen");
const viewHighScores = document.getElementById("submit");
const startQuiz = document.getElementById("start");
const questionsDiv = document.getElementById("questions");
const feedback = document.getElementById("feedback")
const question = document.getElementById("question-title");
const answers = document.getElementById("choices");
const finalScore = document.getElementById("final-score");
const answerA = document.createElement("button");
const answerB = document.createElement("button");
const answerC = document.createElement("button");
const answerD = document.createElement("button");

answers.appendChild(answerA);
answers.appendChild(answerB);
answers.appendChild(answerC);
answers.appendChild(answerD);


let currentQuestion = 0;
let score = 0;

function startQuestions () {
    startQuiz.onclick = quizHomepage.classList.add("hide");
    questionsDiv.classList.remove("hide");
    currentQuestion = 0;
    question.innerHTML = myQuestions[currentQuestion].question;
    answerA.innerHTML = myQuestions[currentQuestion].answers["a"];
    answerA.onclick = () => {
        let option = 0;
        if(myQuestions[currentQuestion].answers[option]) {
            if(score < 4) {
                score++;
            }
        } 
        finalScore.innerHTML = score;
        if(currentQuestion < 3) {
            nextQuestion();
        }
    }
answerB.innerHTML = myQuestions[currentQuestion].answers["b"];
answerB.onclick = () => {
    let option = 1;
    if(myQuestions[currentQuestion].answers[option]) {
        if(score < 4) {
            score++;
        }
    }
    finalScore.innerHTML = score;
    if(currentQuestion < 3) {
        nextQuestion();
    }
}
answerC.innerHTML = myQuestions[currentQuestion].answers["c"];
answerB.onclick = () => {
    let option = 2;
    if(myQuestions[currentQuestion].answers[option]) {
        if(score < 4) {
            score++;
        }
    }
    finalScore.innerHTML = score;
    if(currentQuestion < 3) {
        nextQuestion();
    }
}

answerD.innerHTML = myQuestions[currentQuestion].answers["d"];
answerB.onclick = () => {
    let option = 3;
    if(myQuestions[currentQuestion].answers[option]) {
        if(score < 4) {
            score++;
        }
    }
    finalScore.innerHTML = score;
    if(currentQuestion < 3) {
        nextQuestion();
    } 
}

};

startQuiz.addEventListener("click", startQuestions);

function restart () {
    currentQuestion = 0;
    questionsDiv.classList.add("hide");
    feedback.classList.add("hide");
    quizResult.classList.add("hide");
    score = 0;
    finalScore.innerHTML = score;
    startQuestions();
};

function nextQuestion () {
    currentQuestion++;
    if(currentQuestion > 3) {
        quizResult.classList.remove("hide");
        questionsDiv.classList.add("hide");
        viewHighScores.onclick = window.location.href = "highscores.html";
    } else startQuestions();

};



// shows the first question when clicked
// startQuiz.addEventListener("click", showQuestion);
/*startQuiz.onclick = nextQuestion;

// set timer here

// this generates the question options 
function showQuestion () {
   const question = document.getElementById("question-title");
   const answers = document.getElementById("choices");

   question.textContent = myQuestions[0];
   answers.innerHTML = "";

   for(let i = 0; i < myQuestions.answers.length; i++) {
    const choicesDiv = document.createElement("div");
    const choice = document.createElement("input");
    const choiceLabel = document.createElement("label");

    choice.type = "button";
    choice.name = "answer";
    choice.value = i;

    choiceLabel.textContent = myQuestions.answers[i];

    choicesDiv.appendChild(choice);
    choicesDiv.appendChild(choiceLabel);
    answers.appendChild(choicesDiv);
   }
};

showQuestion();

function nextQuestion () {
    if (myQuestions[0] < myQuestions.length - 1) {
myQuestions[0]++;
showQuestion();
    } else {
        totalScore();
    }
};


  // this sends you to your final score page
function totalScore () {
quizResult
const scoreValue = document.getElementById("final-score");
scoreValue.textContent = scoreSum;
}



// need to save this part to local storage so it updates with each answer 
let scoreSum = 0;

  // this sends you to the high score page
function showHighscores() {
    const highScorePage = window.location.href = "highscores.html";
viewHighScores.onclick = highScorePage;

}


// shows the high scores page when clicked
viewHighScores.addEventListener("click", showHighscores); */

