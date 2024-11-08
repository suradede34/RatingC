let data = [1, 2, 3, 4, 5];

for (const x of data) {
    console.log(x);
    document.querySelector('.game').innerHTML += `<div class="game-item">${x}</div>`;
}

function handleClick() {
    console.log(this);
}

const items = document.querySelectorAll('.game-item');

function handleItemClick() {
    this.classList.toggle('game-item-active');
}

for (const item of items) {
    item.addEventListener('click', handleItemClick);
}

