let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-button")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    printLeads()
})


function printLeads(){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
        listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
    }
    ulEl.innerHTML = listItems
    
}
