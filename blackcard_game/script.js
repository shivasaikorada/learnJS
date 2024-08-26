let cards = []
let hasBlackJack = false
let isAlive = false  
let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name:"Shiva",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name+" : $"+player.chips

function getRandonCard(){
    let randomNum = Math.random()*13 
    randomNum = Math.floor(randomNum) + 1
    if(randomNum>10){
        randomNum = 10
    }else if(randomNum===1){
        randomNum = 11  
    }
    return randomNum;

    //Math.random() generates nums between the range 0.000 to 0.999...<1
    //Matg.floor() will remove the decimal part
    //return Math.floor(Math.random()*13)+1
}

function startGame(){
    isAlive = true
    cards = [getRandonCard(), getRandonCard()]
    renderGame()
}

function renderGame(){
    let sum = 0;
    cardEl.textContent = "Cards :"

    for(let i=0; i<cards.length; i++){
        cardEl.textContent += " " + cards[i]+", "
        sum += cards[i]
    }
    
    sumEl.textContent = sum
    
    if(sum <= 20){
        messageEl.textContent ="Want to draw anymore card??"
        isAlive= true
    }else if(sum ===21){
        messageEl.textContent ="Woohoo! You are BlackJack :)"
        hasBlackJack= true
        isAlive = false
    }else{
        messageEl.textContent = "You are out, start a new game :("
        isAlive = false
    }
    
    //messageEl.textContent = message
    
}

function addCard(){
    if(hasBlackJack===false && isAlive===true){
        let thirdCard= getRandonCard()
        cards.push(thirdCard)
        renderGame()
    }
    
}


