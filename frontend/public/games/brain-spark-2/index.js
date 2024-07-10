const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

// Modal elements
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('#modal-title');
const modalCloseBtn = document.querySelector('.modal-close');

// Audio elements
const timerAudio = document.querySelector('#timer-audio');
const buttonAudio = document.querySelector('#button-audio');
const timeupAudio = document.querySelector('#timeup-audio');

let correctWord;
let timer;
let gameStarted = false;

// Initialize the timer
const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
            timerAudio.play(); // Play timer sound
        } else {
            clearInterval(timer);
            timeupAudio.play(); // Play time-up sound
            showModal(`Time off! "${correctWord.toUpperCase()}" was the correct word`);
            initGame();
        }
    }, 1000);
};

// Initialize the game
const initGame = () => {
    initTimer(60);
    const randomObj = words[Math.floor(Math.random() * words.length)];
    const wordArray = randomObj.word.split("").sort(() => Math.random() - 0.5);
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);
};

// Modal control functions
const showModal = (title) => {
    modalTitle.textContent = title;
    modal.classList.add('show');
};

const hideModal = () => {
    modal.classList.remove('show');
};

// Check the user's word
const checkWord = () => {
    buttonAudio.play(); // Play button sound
    const userWord = inputField.value.toLowerCase();
    if (!userWord) {
        showModal("Please enter a word");
    } else if (userWord !== correctWord) {
        showModal(`Oops! "${userWord}" is not the correct word`);
    } else {
        showModal(`Congrats! "${userWord.toUpperCase()}" is the correct word`);
        initGame();
    }
};

// Start the game on any key press
const startGameOnKeyPress = (event) => {
    if (!gameStarted) {
        gameStarted = true;
        initGame();
    }
};

// Event listeners
modalCloseBtn.addEventListener('click', hideModal);
refreshBtn.addEventListener("click", () => {
    buttonAudio.play(); // Play button sound
    initGame();
});
checkBtn.addEventListener("click", checkWord);
document.addEventListener("keydown", startGameOnKeyPress);








// const wordText = document.querySelector(".word");
// const hintText = document.querySelector(".hint span");
// const timeText = document.querySelector(".time b");
// const inputField = document.querySelector("input");
// const refreshBtn = document.querySelector(".refresh-word");
// const checkBtn = document.querySelector(".check-word");

// // Modal elements
// const modal = document.querySelector('.modal');
// const modalTitle = document.querySelector('#modal-title');
// const modalCloseBtn = document.querySelector('.modal-close');

// let correctWord;
// let timer;

// // Initialize the timer
// const initTimer = (maxTime) => {
//     clearInterval(timer);
//     timer = setInterval(() => {
//         if (maxTime > 0) {
//             maxTime--;
//             timeText.innerText = maxTime;
//         } else {
//             clearInterval(timer);
//             showModal(`Time off! "${correctWord.toUpperCase()}" was the correct word`);
//             initGame();
//         }
//     }, 1000);
// };

// // Initialize the game
// const initGame = () => {
//     initTimer(60);
//     const randomObj = words[Math.floor(Math.random() * words.length)];
//     const wordArray = randomObj.word.split("").sort(() => Math.random() - 0.5);
//     wordText.innerText = wordArray.join("");
//     hintText.innerText = randomObj.hint;
//     correctWord = randomObj.word.toLowerCase();
//     inputField.value = "";
//     inputField.setAttribute("maxlength", correctWord.length);
//     console.log(randomObj);
// };

// // Modal control functions
// const showModal = (title) => {
//     modalTitle.textContent = title;
//     modal.classList.add('show');
// };

// const hideModal = () => {
//     modal.classList.remove('show');
// };

// // Check the user's word
// const checkWord = () => {
//     const userWord = inputField.value.toLowerCase();
//     if (!userWord) {
//         showModal("Please enter a word");
//     } else if (userWord !== correctWord) {
//         showModal(`Oops! "${userWord}" is not the correct word`);
//     } else {
//         showModal(`Congrats! "${userWord.toUpperCase()}" is the correct word`);
//         initGame();
//     }
// };

// // Event listeners
// modalCloseBtn.addEventListener('click', hideModal);
// refreshBtn.addEventListener("click", initGame);
// checkBtn.addEventListener("click", checkWord);

// initGame();