console.log('JS OK!');

const cards = [
    { name: 'cheeseburger', img: 'img/cheeseburger.png' },
    { name: 'cheeseburger', img: 'img/cheeseburger.png' },
    { name: 'fries', img: 'img/fries.png' },
    { name: 'fries', img: 'img/fries.png' },
    { name: 'hotdog', img: 'img/hotdog.png' },
    { name: 'hotdog', img: 'img/hotdog.png' },
    { name: 'ice-cream', img: 'img/ice-cream.png' },
    { name: 'ice-cream', img: 'img/ice-cream.png' },
    { name: 'milkshake', img: 'img/milkshake.png' },
    { name: 'milkshake', img: 'img/milkshake.png' },
    { name: 'pizza', img: 'img/pizza.png' },
    { name: 'pizza', img: 'img/pizza.png' }
]

// arrays for images matching
let cardsSelectedByUser = [];

let cardsSelectedByUserFlip = [];

let cardsMatched = [];

// randomize cards order in the starting array
cards.sort(() => 0.5 - Math.random());


// variables

const grid = document.getElementById('grid');

const score = document.getElementById('score-number');

const errors = document.getElementById('errors-number');

let errorsNumber = 0;


// asks user name

const playerName = document.getElementById('player-name');

let playerNameInput = prompt('Insert your name! (max 10 letters)');

while (playerNameInput.length > 10) {
    alert('That name is too long!');
    playerNameInput = prompt('Insert your name! (max 10 letters)');
}

playerName.innerHTML = playerNameInput;




// generate a 4x4 images grid
generateGrid();


// FUNCTIONS

function generateGrid() {
    for (let i = 0; i < cards.length; i++) {

        let card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.classList.add('img-fluid', 'col-2');

        card.addEventListener('click', revealCard);

        grid.append(card);
    }
}

function revealCard() {
    let cardFlip = this.getAttribute('data-id');

    cardsSelectedByUser.push(cards[cardFlip].name);

    cardsSelectedByUserFlip.push(cardFlip);

    // this changes the clicked card with the corresponding in the cards array
    this.setAttribute('src', cards[cardFlip].img);

    if (cardsSelectedByUser.length === 2) {
        setTimeout(checkMatch, 200);
    }
}

function checkMatch() {
    let selectedCards = document.querySelectorAll('img');

    const firstSelect = cardsSelectedByUserFlip[0];
    const secondSelect = cardsSelectedByUserFlip[1];

    // checks if the selected cards matches and if so replaces them with white img
    if (cardsSelectedByUser[0] === cardsSelectedByUser[1]) {

        console.log('You found 2 matching cards!');
        console.log('');

        alert('You found 2 matching cards!');

        selectedCards[firstSelect].setAttribute('src', 'img/white.png');
        selectedCards[secondSelect].setAttribute('src', 'img/white.png');

        // saves the matched card into a new array
        cardsMatched.push(cardsSelectedByUser);
    } else {
        // if the cards do not match, this flips them back to original
        selectedCards[firstSelect].setAttribute('src', 'img/blank.png');
        selectedCards[secondSelect].setAttribute('src', 'img/blank.png');

        console.log('You picked 2 non-matching cards! Try again!');
        console.log('');

        alert('You picked 2 non-matching cards! Try again!');

        errorsNumber++;

        errors.innerHTML = errorsNumber;
    }

    // we need to clear the storage array for choosen cards now
    cardsSelectedByUser = [];
    cardsSelectedByUserFlip = [];

    // this will show the current score by checking the images in the cardsMatched array
    score.textContent = cardsMatched.length;

    // this will check if we guessed all the cards (we won the game)
    if (cardsMatched.length === cards.length / 2) {
        score.textContent = 'Congratulations, you won!';
        console.log('Congratulations, you won!');
    }
}