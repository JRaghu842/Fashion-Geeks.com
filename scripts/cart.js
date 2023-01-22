let hreflink = document.getElementById("hrefLogin")
console.log(hreflink);


let userName = localStorage.getItem("name")
console.log(userName);

if(userName){
    hreflink.innerText = userName
}

let LSData = JSON.parse(localStorage.getItem("cart")) || []

let container = document.getElementById("Allcards")

let total = document.querySelector(".total")
let ordertotal = document.getElementById("Ordertotal")

let storeTotal= JSON.parse(localStorage.getItem("total")) || []

console.log(LSData)


function Display(){
    container.innerHTML=""
LSData.forEach((element) =>{


    let card = document.createElement("div")
    card.className = "div0"

    let image = document.createElement("img")
    image.src = element.image

    let div1 = document.createElement("div")
    div1.className = "div1"


    let title =document.createElement("p")
    title.innerText = "Name: "+element.title

    let color =document.createElement("p")
    color.innerText = "Color: "+ element.color

    let size =document.createElement("p")
    size.innerText = "Size: Small "

    let price =document.createElement("p")
    price.innerText = "Price :"+"₹ " +element.price


    let div2 = document.createElement("div")
    div2.className = "div2"


    let remove = document.createElement("button")
    remove.innerText = "Remove item"
    remove.addEventListener("click",()=>{
        LSData = LSData.filter((ele)=>{
          return ele.id !== element.id
        })
        localStorage.setItem("cart",JSON.stringify(LSData))
        Display()
      })

    let incr = document.createElement("button")
    incr.innerText = "+"
    incr.addEventListener("click", ()=>{
        element = element.quantity++
        localStorage.setItem("cart",JSON.stringify(LSData))
        Display()
      })

    let decr = document.createElement("button")
    decr.innerText = "-"
    decr.addEventListener("click", ()=>{
        if(element.quantity>1){
        element = element.quantity--
        localStorage.setItem("cart",JSON.stringify(LSData))
        Display()
        }
      })

    let quantity = document.createElement("span")
    quantity.innerText = "Quantity: "+ element.quantity

   card.append(image,div1,div2) 
   div1.append(title,color,size,price)
   div2.append(incr,quantity,decr,remove)
   container.append(card)


   let itemCount = document.getElementById("count-item")
    itemCount.innerText = element.quantity 

})

let sum = 0
for(let i=0; i<LSData.length; i++){
  sum = sum + LSData[i].quantity * LSData[i].price
}

total.innerText = "₹ "+sum+".00"   
ordertotal.innerText ="₹ "+sum+".00"   

storeTotal.push(total.innerText)
localStorage.setItem("total",JSON.stringify(storeTotal))

}

Display()

let GoToHomePage = document.getElementById("GoToHomePage")
GoToHomePage.addEventListener("click", ()=>{
  window.location.assign("/index.html")
})