// 7.  Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reiksmes nuo 0 iki 2.
// Suskaiciuokite kiek yra nuliu, vienetu ir dvejetu.

//  Naujo masyvo sukurimas su pradiniais 4 elementais
// let kint = new Array(4);

// Naujo masyvo sukurimas su pradinemis reiksmemis
// let kint = [random(0, 2), random(0, 2), random(0, 2), random(0, 2)];

// Naujo tuscio Array sukurimas
let kint = [];

// Elemento pridejimas pagal indeksa ir reiksme
kint[0] = random(0, 2);
kint[1] = random(0, 2);
kint[2] = random(0, 2);
kint[3] = random(0, 2);

console.log(`Random numbers: ${kint}`);

let count = new Array(3).fill(0);
console.log(`Count: ${count}`);

if (kint[0] === 0) count[0]++;
else if (kint[0] === 1) count[1]++;
else count[2]++;

if (kint[1] === 0) count[0]++;
else if (kint[1] === 1) count[1]++;
else count[2]++;

if (kint[2] === 0) count[0]++;
else if (kint[2] === 1) count[1]++;
else count[2]++;

if (kint[3] === 0) count[0]++;
else if (kint[3] === 1) count[1]++;
else count[2]++;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Skaiciu 0 - ${count[0]}\t 1 - ${count[1]}\t  2 - ${count[2]}`);

console.log("-----------------------");
console.log("--   skaiciu atspejimo zaidimas   --");
console.log("-----------------------");

let randomNumber = random(1, 20),
  shotsLeft = 6;
console.log(`Random number: ${randomNumber}`);

function guessNumber() {
  let inputElement = document.querySelector("#guess-input");
  let resultParagraph = document.querySelector("#result");
  let guessCountElement = document.querySelector("#guess-count");

  guessCountElement.innerText = shotsLeft;
  if (shotsLeft === 0) {
    resultParagraph.innerText = `Spejimu skaicius baigesi. Bandykite dar karta perkrove puslapi.`;
    return;
  }
  shotsLeft--;

  let inputValue = inputElement.value;

  if (inputValue > randomNumber) {
    resultParagraph.innerText = `Spejimas buvo netesingas, ieskomas skaicius yra mazesnis. Jums liko ${shotsLeft} spejimai.`;
  } else if (inputValue < randomNumber) {
    resultParagraph.innerText = `Spejimas buvo netesingas, ieskomas skaicius yra didesnis. Jums liko ${shotsLeft} spejimai.`;
  } else {
    resultParagraph.innerText = `Tesinga spejimas! Po ${6 - shotsLeft}`;
  }
}
