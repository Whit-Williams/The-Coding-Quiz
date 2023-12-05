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
const feedback = document.getElementById("feedback");
const question = document.getElementById("question-title");
const answers = document.getElementById("choices");
const finalScore = document.getElementById("final-score");
const timerText = document.getElementById("time");
const highscoresList = document.getElementById("highscores");

startQuiz.addEventListener("click", startQuestions);

 //take you back to quiz homepage

let currentQuestion = 0;
let score = localStorage.getItem("score");
finalScore.textContent = score;
let seconds = 60;
let timer;

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerText.textContent = seconds;
    if (seconds == 0) {
        clearInterval(timer);
        resultsPage();
      }
  }, 1000); 
};
 
function startQuestions() {
  startQuiz.onclick = quizHomepage.classList.add("hide");
  questionsDiv.classList.remove("hide");
  currentQuestion = 0;
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  question.innerHTML = myQuestions[currentQuestion].question;
  answers.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const answerA = document.createElement("button");
    answerA.setAttribute("class", "option");
    answerA.innerHTML = myQuestions[currentQuestion].answers[i];
    answerA.onclick = checkAnswer;
    answers.appendChild(answerA);
  }

};

function nextQuestion() {
  if (currentQuestion < myQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    quizResult.classList.remove("hide");
    questionsDiv.classList.add("hide");
  }
};

function resultsPage() {
  quizResult.classList.remove("hide");
  questionsDiv.classList.add("hide");
};

function seeHighscores() {
  // grab initials from input, save to local storage
  window.location.href = "highscores.html";

  for (let i = 0; i < 4; i++) {
    const highscore = document.createElement("li");
    answerA.setAttribute("class", "option");
    answerA.innerHTML = myQuestions[currentQuestion].answers[i];
    answerA.onclick = checkAnswer;
    answers.appendChild(answerA);
  }
};

function correctFeedback() {
  feedback.classList.remove("hide");
  feedback.innerHTML = "Correct!";
};

function wrongFeedback() {
  feedback.classList.remove("hide");
  feedback.innerHTML = "Wrong!";
};

function checkAnswer() {
  const rightAnswer = myQuestions[currentQuestion].correctAnswer;
  console.log(this);
  console.log(rightAnswer);

  if (this.textContent === rightAnswer) {
    correctFeedback();
    score++;
    finalScore.textContent = score;
    localStorage.setItem("score", score);
  } else {
    wrongFeedback(); //fix this
    seconds -= 5;
  }
  nextQuestion(); 
};

function restart() {
  currentQuestion = 0;
  score = 0; // work out this part 
};
//Need something to target the initials field
