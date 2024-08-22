let num1 = 10
let num2 = 5
document.getElementById("int1").textContent = num1
document.getElementById("int2").textContent = num2
let solution = document.getElementById("result")

function sum(){
    //document.getElementById("result").innerText = num1+num2
    let adding = num1+ num2
    solution.textContent = adding
}


function sub(){
    let adding = num1-num2
    solution.textContent = adding
 }
 
function mul(){
    let adding = num1*num2
    solution.textContent = adding
 }
 
function div(){
    let adding = num1/num2
    solution.textContent = adding
 }