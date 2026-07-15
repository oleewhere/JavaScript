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
const groupedDeck = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
renderCards(groupedDeck.spades, 'suit-spades');
renderCards(groupedDeck.diamonds, 'suit-diamonds');
renderCards(groupedDeck.hearts, 'suit-hearts');
renderCards(groupedDeck.clubs, 'suit-clubs');