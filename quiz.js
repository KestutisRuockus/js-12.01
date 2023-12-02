let questionAnswerNr1,
  questionAnswerNr2,
  questionAnswerNr3,
  questionAnswerNr4,
  questionAnswerNr5;
let correctAnswersList = [
  "paris",
  "seven",
  "mars",
  "carbon-dioxide",
  "blue-whale",
];
// elements of hidden answer list
let correctAnswerElement = document.querySelectorAll(".correct-answer");

// get selected item id
// event - triggered event
function getId(event) {
  let id = event.id;
  styleSelectedAnswer(id);
}

// mark selected answer
// id - selected answer id
function styleSelectedAnswer(id) {
  let element = document.querySelector(`#${id}`);
  // question 1
  if (id === "berlin" || id === "london" || id === "paris") {
    questionAnswerNr1 = id;
    document.querySelector("#berlin").classList.remove("selected");
    document.querySelector("#london").classList.remove("selected");
    document.querySelector("#paris").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 2
  else if (id === "five" || id === "seven" || id === "six") {
    questionAnswerNr2 = id;
    document.querySelector("#five").classList.remove("selected");
    document.querySelector("#seven").classList.remove("selected");
    document.querySelector("#six").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 3
  else if (id === "mars" || id === "jupiter" || id === "saturn") {
    questionAnswerNr3 = id;
    document.querySelector("#mars").classList.remove("selected");
    document.querySelector("#jupiter").classList.remove("selected");
    document.querySelector("#saturn").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 4
  else if (id === "oxygen" || id === "carbon-dioxide" || id === "nitrogen") {
    questionAnswerNr4 = id;
    document.querySelector("#oxygen").classList.remove("selected");
    document.querySelector("#carbon-dioxide").classList.remove("selected");
    document.querySelector("#nitrogen").classList.remove("selected");
    element.classList.add("selected");
  }
  // question 5
  else if (id === "elephant" || id === "blue-whale" || id === "girafe") {
    questionAnswerNr5 = id;
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
    if (questionAnswerNr1 === correctAnswersList[0]) {
      correctAnswer(questionAnswerNr1, 0);
      result++;
    } else {
      wrongAnswer(questionAnswerNr1, 0);
    }
    if (questionAnswerNr2 === correctAnswersList[1]) {
      correctAnswer(questionAnswerNr2, 1);
      result++;
    } else {
      wrongAnswer(questionAnswerNr2, 1);
    }
    if (questionAnswerNr3 === correctAnswersList[2]) {
      correctAnswer(questionAnswerNr3, 2);
      result++;
    } else {
      wrongAnswer(questionAnswerNr3, 2);
    }
    if (questionAnswerNr4 === correctAnswersList[3]) {
      correctAnswer(questionAnswerNr4, 3);
      result++;
    } else {
      wrongAnswer(questionAnswerNr4, 3);
    }
    if (questionAnswerNr5 === correctAnswersList[4]) {
      correctAnswer(questionAnswerNr5, 4);
      result++;
    } else {
      wrongAnswer(questionAnswerNr5, 4);
    }

    // for

    // let list = [];
    // list[0] = questionAnswerNr1;
    // list[1] = questionAnswerNr2;
    // list[2] = questionAnswerNr3;
    // list[3] = questionAnswerNr4;
    // list[4] = questionAnswerNr5;
    // for (let i = 0; i < list.length; i++) {
    //   if (list[i] === correctAnswersList[i]) {
    //     correctAnswer(list[i], i);
    //     result++;
    //   } else {
    //     wrongAnswer(list[i], i);
    //   }
    // }

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
// id - question selected answer's id
// number - question number
function correctAnswer(id, number) {
  document.querySelector(`#${id}`).classList.add("correct");
  correctAnswerElement[number].innerText = "Your answer is correct!";
  correctAnswerElement[number].style.display = "block";
}

// show when answer is wrong
// id - question selected answer's id
// number - question number
function wrongAnswer(id, number) {
  document.querySelector(`#${id}`).classList.add("wrong");
  correctAnswerElement[number].innerText = `Incorrect, answer is ${
    correctAnswersList[number].charAt(0).toUpperCase() +
    correctAnswersList[number].slice(1).replace("-", " ")
  }`;
  correctAnswerElement[number].style.display = "block";
}
