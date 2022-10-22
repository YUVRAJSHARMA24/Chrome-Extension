// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. 
// === is used for comparing two variables, but this operator also checks datatype and compares two values

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// let messageEl = document.querySelector("#message-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 250
}
let playerName = "Per"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    // return random

    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 10
    }
    else {
        return random
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got BlackJack! 🤩"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
