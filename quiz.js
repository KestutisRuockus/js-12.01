let questionAnswerNr1,
  questionAnswerNr2,
  questionAnswerNr3,
  questionAnswerNr4,
  questionAnswerNr5,
  correctAnswerNr1 = "paris",
  correctAnswerNr2 = "seven",
  correctAnswerNr3 = "mars",
  correctAnswerNr4 = "carbon-dioxide",
  correctAnswerNr5 = "blue-whale";

// get selected answer id
function getId(event) {
  let id = event.id;
  styleSelectedAnswer(id);
}

// mark selected answer
function styleSelectedAnswer(id) {
  let element = document.querySelector(`#${id}`);
  // question 1
  if (id === "berlin" || id === "london" || id === "paris") {
    questionAnswerNr1 = id;
    console.log(`Question 1 answer: ${questionAnswerNr1}`); // selected answer
    document.querySelector("#berlin").classList.remove("selected");
    document.querySelector("#london").classList.remove("selected");
    document.querySelector("#paris").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 2
  else if (id === "five" || id === "seven" || id === "six") {
    questionAnswerNr2 = id;
    console.log(`Question 2 answer: ${questionAnswerNr2}`); // selected answer
    document.querySelector("#five").classList.remove("selected");
    document.querySelector("#seven").classList.remove("selected");
    document.querySelector("#six").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 3
  else if (id === "mars" || id === "jupiter" || id === "saturn") {
    questionAnswerNr3 = id;
    console.log(`Question 3 answer: ${questionAnswerNr3}`); // selected answer
    document.querySelector("#mars").classList.remove("selected");
    document.querySelector("#jupiter").classList.remove("selected");
    document.querySelector("#saturn").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 4
  else if (id === "oxygen" || id === "carbon-dioxide" || id === "nitrogen") {
    questionAnswerNr4 = id;
    console.log(`Question 4 answer: ${questionAnswerNr4}`); // selected answer
    document.querySelector("#oxygen").classList.remove("selected");
    document.querySelector("#carbon-dioxide").classList.remove("selected");
    document.querySelector("#nitrogen").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 5
  else if (id === "elephant" || id === "blue-whale" || id === "girafe") {
    questionAnswerNr5 = id;
    console.log(`Question 5 answer: ${questionAnswerNr5}`); // selected answer
    document.querySelector("#elephant").classList.remove("selected");
    document.querySelector("#blue-whale").classList.remove("selected");
    document.querySelector("#girafe").classList.remove("selected");
    element.classList.add("selected");
  }
}

// check or selected answer are correct and add style it with 'wrong' or 'correct' class
function checkAnswers() {
  let result = 0;
  if (
    questionAnswerNr1 === undefined ||
    questionAnswerNr2 === undefined ||
    questionAnswerNr3 === undefined ||
    questionAnswerNr4 === undefined ||
    questionAnswerNr5 === undefined
  ) {
    alert(
      "Not all questions has answers. Please make sure all questions has selected answer and try again."
    );
    return;
  } else {
    if (questionAnswerNr1 === correctAnswerNr1) {
      correctAnswer(questionAnswerNr1);
      result++;
    } else {
      wrongtAnswer(questionAnswerNr1);
    }
    if (questionAnswerNr2 === correctAnswerNr2) {
      correctAnswer(questionAnswerNr2);
      result++;
    } else {
      wrongtAnswer(questionAnswerNr2);
    }
    if (questionAnswerNr3 === correctAnswerNr3) {
      correctAnswer(questionAnswerNr3);
      result++;
    } else {
      wrongtAnswer(questionAnswerNr3);
    }
    if (questionAnswerNr4 === correctAnswerNr4) {
      correctAnswer(questionAnswerNr4);
      result++;
    } else {
      wrongtAnswer(questionAnswerNr4);
    }
    if (questionAnswerNr5 === correctAnswerNr5) {
      correctAnswer(questionAnswerNr5);
      result++;
    } else {
      wrongtAnswer(questionAnswerNr5);
    }
    // change buttons visibility
    document.querySelector(".get-answers").style.display = "none";
    document.querySelector(".restart").style.display = "block";
    document.querySelector(".result").style.display = "block";
    document.querySelector("#result").innerText = result;
  }
}

// refresh page to reload quiz
function restarGame() {
  location.reload();
}

// show when answer is correct
function correctAnswer(id) {
  document.querySelector(`#${id}`).classList.add("correct");
}

// show when answer is wrong
function wrongtAnswer(id) {
  document.querySelector(`#${id}`).classList.add("wrong");
}
