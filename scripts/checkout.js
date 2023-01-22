let hreflink = document.getElementById("hrefLogin")
console.log(hreflink);


let userName = localStorage.getItem("name")
console.log(userName);

if(userName){
    hreflink.innerText = userName
}

let firstname = document.getElementById("firstname").value
let lastname = document.getElementById("lastname").value
let address1 = document.getElementById("address1").value
let city = document.getElementById("city").value
let pincode = document.getElementById("pincode").value




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

    if(firstname == "" || lastname == "" || address1 == "" || city == ""|| pincode ){
      alert("Enter all details to place order")
    }
    else {
      alert("You have successfully placedorder")
    }

})


let GoToHomePage = document.getElementById("GoToHomePage")
GoToHomePage.addEventListener("click", ()=>{
  window.location.assign("/index.html")
})