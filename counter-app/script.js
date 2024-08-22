let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0

function increment() {
  count++;
  countEl.innerText = count
  //save()
}




let welcomeEl = document.getElementById("welcome-el")
let myname = "Shiva "
let greeting = "welcomes you to his website  :)"
//let myGreeting= myname + greeting;
//welcomeEl.innerText = myGreeting;
welcomeEl.innerText = myname + greeting
welcomeEl.innerText += " use the max out of it"

function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr

  //After clicking save the count will be 0 and will show 0,  then continues asusual
  count=0;
  countEl.textContent=0;
}

let errorEl = document.getElementById("error-el")
function buying(){
  let printMsg= "Something went wrong, please try later"
  errorEl.innerText = printMsg
}