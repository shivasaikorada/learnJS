let hotel = {
    takesInput : function(budget){
        console.log("Show Below : $"+budget)
    },
    name: "Treebo Trends",
    price: 2000,
    isAvailable: true,
    amenities: ["AC", "NON-AC"],
    logData : function (){
        console.log("Name of Hotel : "+hotel.name+", Price : $"+hotel.price+", Availability : "+hotel.isAvailable+", Amenities : "+ hotel.amenities)
    }
    
}
//hotel.takesInput(1500)
//hotel.logData()

let checkOut = ["one", "two", "three", "four"]
checkOut.unshift("zero")
//console.log(checkOut)

let fruits = ["ap", "ts", "ap", "ap", "ts", "od"]
let ap="";
let ts="";
for(let i = 0; i<fruits.length; i++){
    if(fruits[i]=="ap"){
        ap +=" "+fruits[i]
        console.log(ap)
    }
    else if(fruits[i]=="ts"){
        ts +=" "+fruits[i]
        console.log(ts)
    }
}