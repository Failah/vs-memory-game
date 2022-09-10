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

const grid = document.getElementById('grid');

generateGrid();


// FUNCTIONS

function generateGrid() {
    for (let i = 0; i < cards.length; i++) {

        let card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.classList.add('img-fluid', 'col-3');

        // card.addEventListener('click', revealCard)

        grid.append(card);
    }
}