const suits = [
    {name: 'spade', color: 'black'},
    {name: 'clubs', color: 'black'},
    {name: 'heart', color: 'red'},
    {name: 'diamond', color: 'red'}
];
const values = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        deck.push({
            cardSuit: suits[i].name,
            value: values[j],
            color: suits[i].color
        });
    }
}

function renderCards(cardsArray, containerId) {
    const container = document.getElementById(containerId);
    cardsArray.forEach(card => {
        let sign = '';
        if (card.cardSuit === 'spade') sign = '♠';
        if (card.cardSuit === 'clubs') sign = '♣';
        if (card.cardSuit === 'heart') sign = '♥';
        if (card.cardSuit === 'diamond') sign = '♦';
        container.innerHTML += `
        <div class="card ${card.color}">
        <div>${card.value}</div>
        <div class="suit-icon">${sign}</div>
        </div>
    `;
    });
}
renderCards(deck, 'full-deck');
const ace = deck.find(card => card.cardSuit === 'spade' && card.value === 'Ace');
if (ace) {
    renderCards([ace], 'ace-spade');
}

const sixes = deck.filter(card => card.value === '6');
renderCards(sixes, 'all-sixes');

const redCards = deck.filter(card => card.color === 'red');
renderCards(redCards, 'all-red');

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
renderCards(diamonds, 'all-diamonds');

const clubsFrom9 = deck.filter(card => {
    return card.cardSuit === 'clubs' && (
        card.value === '9' ||
        card.value === '10' ||
        card.value === 'Jack' ||
        card.value === 'Queen' ||
        card.value === 'King' ||
        card.value === 'Ace'
    );
});
renderCards(clubsFrom9, 'clubs-9-plus');