console.log('JS OK!');

const cards = [
    { name: 'blank', img: 'img/blank.png' },
    { name: 'blank', img: 'img/blank.png' },
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
    { name: 'pizza', img: 'img/pizza.png' },
    { name: 'white', img: 'img/white.png' },
    { name: 'white', img: 'img/white.png' }
]

// arrays for images matching
const cardsSelectedByUser = [];

const cardsSelectedByUserFlip = [];

const cardsMatched = [];


// variables

const grid = document.getElementById('grid');



// generate a 4x4 images grid
generateGrid();


// FUNCTIONS

function generateGrid() {
    for (let i = 0; i < cards.length; i++) {

        let card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.classList.add('img-fluid', 'col-3');

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
        setTimeout(checkMatch, 400);
    }
}

function checkMatch() {
    let selectedCards = document.querySelectorAll('img');

    const firstSelect = cardsSelectedByUserFlip[0];
    const secondSelect = cardsSelectedByUserFlip[1];

    // checks if the selected cards matches and if so replaces them with white img
    if (cardsSelectedByUser[0] === cardsSelectedByUser[1]) {

        console.log('You found 2 matching cards!');

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

        alert('You picked 2 non-matching cards! Try again!');
    }

    // we need to clear the storage array for choosen cards now
    cardsSelectedByUser = [];
    cardsSelectedByUserFlip = [];


}