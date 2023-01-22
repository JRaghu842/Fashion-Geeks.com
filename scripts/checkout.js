let CLSData = JSON.parse(localStorage.getItem("cart")) || []
console.log(CLSData);

let storeTotal= JSON.parse(localStorage.getItem("total")) || []
console.log(storeTotal);

let total = document.querySelector(".total")
let ordertotal = document.getElementById("Ordertotal")

total.innerText = storeTotal[storeTotal.length-1]
ordertotal.innerText = storeTotal[storeTotal.length-1]

let itemCount = document.getElementById("count-item")
itemCount.innerText = CLSData[CLSData.length-1].quantity 

let placeorder =document.getElementById("placeorder")
placeorder.addEventListener("click",() =>{
    alert("You have successfully placedorder")
})