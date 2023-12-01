let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#second-number");
let shownText = document.querySelector("#shown-text");
let isInputEmpty;

// suma
function sum() {
  isInputEmpty = checkInputs();
  if (isInputEmpty === true) {
    shownText.innerText = "Laukeliai negali būti tušti. Įveskite skaičius";
    return;
  } else {
    let result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    shownText.innerText = result.toString();
    console.log(`sum: ${result}`);
  }
  clearInputs();
}

// atimtis
function subtract() {
  isInputEmpty = checkInputs();
  if (isInputEmpty === true) {
    shownText.innerText = "Laukeliai negali būti tušti. Įveskite skaičius";
    return;
  } else {
    let result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    shownText.innerText = result.toString();
  }
  clearInputs();
}

// daugyba
function multiply() {
  isInputEmpty = checkInputs();
  if (isInputEmpty === true) {
    shownText.innerText = "Laukeliai negali būti tušti. Įveskite skaičius";
    return;
  } else {
    let result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    shownText.innerText = result.toString();
  }
  clearInputs();
}

// dalyba
function divide() {
  isInputEmpty = checkInputs();
  if (isInputEmpty === true) {
    shownText.innerText = "Laukeliai negali būti tušti. Įveskite skaičius";
    return;
  }
  if (firstNumber.value === "0" || secondNumber.value === "0") {
    shownText.innerText = "Dalyba iš '0' negalima";
  } else {
    let result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    shownText.innerText = result.toString();
  }
  clearInputs();
}

// pakeltas n kartu
function square() {
  isInputEmpty = checkInputs();
  if (isInputEmpty === true) {
    shownText.innerText = "Laukeliai negali būti tušti. Įveskite skaičius";
    return;
  } else {
    let result = parseInt(firstNumber.value) ** parseInt(secondNumber.value);
    shownText.innerText = result.toString();
  }
  clearInputs();
}

// isvalo inputus po atlikto veiksmo
function clearInputs() {
  firstNumber.value = "";
  secondNumber.value = "";
}

// patikrina ar inputai tusti
// isEmpty - grazina reiksme ar inputai uzpildyti
function checkInputs() {
  let isEmpty = false;
  if (firstNumber.value === "" || secondNumber.value === "") {
    isEmpty = true;
    console.log(`Input nera:     ${isEmpty}`);
    return isEmpty;
  } else {
    console.log(`Input yra:     ${isEmpty}`);
    return isEmpty;
  }
}
