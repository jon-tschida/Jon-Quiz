`use strict`;

// Select elements in DOM //

const startButton = document.getElementById(`start-button`);
const nextButton = document.getElementById(`next-button`);

const buttonContainer = document.querySelector(`.button-container`);
const questionContent = document.getElementById(`question`);

const answerButtons = document.getElementById(`answer-buttons`);

const answer0 = document.querySelector(`.answer0`);
const answer1 = document.querySelector(`.answer1`);
const answer2 = document.querySelector(`.answer2`);
const answer3 = document.querySelector(`.answer3`);

// Questions setup

const questions = [
  {
    question: `How do you pronounce my last name (Tschida)?`,
    answers: [
      { text: `Cheetah`, correct: true },
      { text: `Tuh-sh-eye-duh`, correct: false },
      { text: `Tuh-Shi-Duh`, correct: false },
      { text: `sh-eye-duh`, correct: false },
    ],
  },
  {
    question: `What did I go to school for?`,
    answers: [
      { text: `Computer Science`, correct: false },
      { text: `IT Innovation`, correct: true },
      { text: `Computer Engineering`, correct: false },
      { text: `Music Theory`, correct: false },
    ],
  },
  {
    question: `Where was I born?`,
    answers: [
      { text: `Omaha, NE`, correct: true },
      { text: `St. Paul, MN`, correct: false },
      { text: `Boston, MA`, correct: false },
      { text: `Fort Myers, FL`, correct: false },
    ],
  },
  {
    question: `What did I do at Baxter Arena?`,
    answers: [
      { text: `Operations Crew Lead`, correct: true },
      { text: `Operations Assistant`, correct: false },
      { text: `Janitorial staff`, correct: false },
      { text: `Marketing Assistant`, correct: false },
    ],
  },
  {
    question: `What is my golf handicap?`,
    answers: [
      { text: `15`, correct: false },
      { text: `12`, correct: false },
      { text: `7`, correct: true },
      { text: `19`, correct: false },
    ],
  },
  {
    question: `Whats my favorite programming language?`,
    answers: [
      { text: `C#`, correct: false },
      { text: `C++`, correct: false },
      { text: `Perl`, correct: false },
      { text: `JavaScript`, correct: true },
    ],
  },
  {
    question: `What is my favorite movie?`,
    answers: [
      { text: `Baby Driver`, correct: false },
      { text: `Toys Story 3`, correct: false },
      { text: `Interstellar`, correct: true },
      { text: `E.T.`, correct: false },
    ],
  },
];

let count = 0;
let clicked = false;
let numberOfTries = 0;

// Functions //

const setNextQuestion = function () {
  // set the question content to the actual question
  questionContent.innerHTML = questions[count].question;

  for (let i = 0; i < questions[count].answers.length; i++) {
    // loop through the answers, and set the answer button content
    document.querySelector(`.answer${i}`).textContent =
      questions[count].answers[i].text;

    // assign true or false classes to the buttons if the answer is correct or not
    if (questions[count].answers[i].correct == true) {
      document.querySelector(`.answer${i}`).classList.add(`true`);
    } else if (questions[count].answers[i].correct == false) {
      document.querySelector(`.answer${i}`).classList.add(`false`);
    }
  }
};

const resetClasses = function () {
  // loop through the answer options and remove the added classes
  for (let i = 0; i <= 3; i++) {
    document.querySelector(`.answer${i}`).classList.remove(`true`);
    document.querySelector(`.answer${i}`).classList.remove(`correct`);

    document.querySelector(`.answer${i}`).classList.remove(`false`);
    document.querySelector(`.answer${i}`).classList.remove(`wrong`);
  }

  // set clicked to false so the user has to get the correct answer
  clicked = false;
};

const start = function () {
  // remove hidden class from button conainer, question, and next button
  buttonContainer.classList.remove("hidden");
  questionContent.classList.remove(`hidden`);
  nextButton.classList.remove(`hidden`);
  // add hidden class to start button
  startButton.classList.add(`hidden`);

  setNextQuestion();
};

// style buttons based on if they are correct or not
const trueOrFalse = function (element) {
  // if the user gets the correct answer, add green styling and set clicked to true
  if (element.classList.contains(`true`)) {
    element.classList.add(`correct`);
    clicked = true;
    numberOfTries++;
  }

  // if the user got it wrong, add red styling
  else if (element.classList.contains(`false`)) {
    element.classList.add(`wrong`);
    numberOfTries++;
  }
};

// Event Listeners //

startButton.addEventListener(`click`, start);

nextButton.addEventListener(`click`, function () {
  // if clicked is true, this means the user got the question right, so they can move on.
  if (clicked) {
    count++;
    resetClasses();
    setNextQuestion();
  }

  // Once we reach the end of the questions list, we change the next button to finish
  // We also tell them how many tries it took them, and if they want to play again.
  if (count === questions.length - 1) {
    nextButton.textContent = "finish";
    nextButton.addEventListener(`click`, function () {
      nextButton.classList.add(`hidden`);
      questionContent.classList.add(`hidden`);
      if (numberOfTries === 7) {
        answerButtons.innerHTML = `
            <p style="font-size: 30px; text-align: center;">Thank you for playing the Jon Quiz!</p>
            <br>
            <p style="font-size: 30px; text-align: center;">You didn't get any wrong!</p>
            <br>
            <p style="font-size: 30px; text-align: center;"> Click here to play again</p>
            <br>
            <button class="button again" style="margin: auto;">Again</button>
            `;
        document.querySelector(`.again`).addEventListener(`click`, function () {
          location.reload();
        });
      } else
        answerButtons.innerHTML = `
            <p style="font-size: 30px; text-align: center;">Thank you for playing the Jon Quiz!</p>
            <br>
            <p style="font-size: 30px; text-align: center;">You finished the quiz in ${numberOfTries} tries.</p>
            <br>
            <p style="font-size: 30px; text-align: center;"> Click here to play again</p>
            <br>
            <button class="button again" style="margin: auto;">Again</button>
            `;
      document.querySelector(`.again`).addEventListener(`click`, function () {
        location.reload();
      });
    });
  }
});

// Answers event listeners
answer0.addEventListener(`click`, function () {
  trueOrFalse(answer0);
});

answer1.addEventListener(`click`, function () {
  trueOrFalse(answer1);
});

answer2.addEventListener(`click`, function () {
  trueOrFalse(answer2);
});

answer3.addEventListener(`click`, function () {
  trueOrFalse(answer3);
});
