const statements = [
  "I'm transitioning from teaching into tech. ",
  "I made this site and wrote the code that types out this text. ",
  "I'm a computer science master's student. ",
  "I used to teach high school math (and some history, English and art). ",
  "I studied film, theater and law as an undergrad. ",
  "You're still here? Click the blue button. ",
];
const changingText = document.querySelector("h2");

let wordId = 0;
let charId = 1;
let typing = true;
let pauseCount = 0;

setInterval(typeAndDelWord, 60);
function typeAndDelWord() {
  // Typing and got to the end of the phrase.
  if (typing && charId >= statements[wordId].length) {
    typing = false;
    // Typing and continue typing.
  } else if (typing) {
    changingText.textContent = statements[wordId].slice(0, charId) + "|";
    charId++;
    // Paused at the end of the phrase.
  } else if (pauseCount < 48) {
    // Blinking cursor.
    if (pauseCount % 12 === 0) {
      changingText.textContent = statements[wordId].slice(0, charId) + "|";
    } else if (pauseCount % 6 === 0) {
      changingText.textContent = statements[wordId].slice(0, charId);
    }
    pauseCount += 1;
    // Deleted word.
  } else if (charId < 0) {
    typing = true;
    charId = 0;
    wordId = (wordId + 1) % statements.length;
    pauseCount = 0;
    // Deleting and keep deleting.
  } else {
    changingText.textContent = statements[wordId].slice(0, charId) + "|";
    charId--;
  }
}
