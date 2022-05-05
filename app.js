// create an array of 12 images
const cardsArray = [
    {
        name: 'fries',
        img: 'images/fries.png',

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',

    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',

    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',

    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',

    },

    {
        name: 'pizza',
        img: 'images/pizza.png',

    },

    {
        name: 'fries',
        img: 'images/fries.png',

    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',

    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',

    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',

    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',

    },

    {
        name: 'pizza',
        img: 'images/pizza.png',

    },
]


// Radomalize the array
cardsArray.sort(()=> 0.5 - Math.random())

// get the grid element
const gridDisplay = document.getElementById('grid')

// creat a function that create cards to be added to the grid
function createBoard(){
    for(let i = 0; i < cardsArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard) //callback
        gridDisplay.appendChild(card)
    }
}
// call the function
createBoard()

// create an array of the chosen images and their ids
let cardChosen = []
let cardChosenIds = []
let cardsWon  = 0

// create a function to check if two chosen cards match
function checkMatch(){
    // get all cards form the grid
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    
    if(optionOneId == optionTwoId){
        alert("You have clicked the same image")
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    if (cardChosen[0] === cardChosen[1]){
        alert('Match Found')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        // remove the click eventlistener on the cards
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon +=1
        
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }
    // empty the two arrays
    cardChosen = []
    cardChosenIds = []
    
    if (cardsWon == (cardsArray.length)/2){
        alert('Won the Game')
        console.log(cardsWon)

    }
}

// create a function to flip over the blank card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src',cardsArray[cardId].img)
    cardChosen.push(cardsArray[cardId].name)
    cardChosenIds.push(cardId)
    // check if cards chosen match
    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 300)
    }
}