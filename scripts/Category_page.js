let hreflink = document.getElementById("hrefLogin")
console.log(hreflink);


let userName = localStorage.getItem("name")
console.log(userName);

if(userName){
    hreflink.innerText = userName
}




let API = "https://63c6dfbcd307b7696742e8ff.mockapi.io/newone"

let newData = []



function FetchData(){
    fetch(API)
    .then((element)=> {
        return element.json()
    })
    .then((maindata)=> {
        console.log(maindata)
        newData = maindata
        Display(newData)
    })
    .catch((err)=>{
        console.log(err);
    })
}
FetchData()


let container = document.getElementById("right-main")


function Display(data){
    container.innerHTML=""
data.forEach((element)=>{

    let card = document.createElement("div")
    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let line = document.createElement("hr")

    let title = document.createElement("p")
    title.innerText = element.title

    let price = document.createElement("h3")
    price.innerText = `₹ ${element.price}`

    let desc = document.createElement("p")
    desc.innerText = element.description

    let ancher = document.createElement("a")
    ancher.href = "./Product.html"

    ancher.append(image, line, title, price, desc)
    card.append(ancher)
    container.append(card)
    // container.append(card)


})
}




// ***************************search***********************//

let searchform  = document.querySelector("form")

searchform.addEventListener("click",(e)=>{
    e.preventDefault();

    let search = searchform.search.value

    let filtered = newData.filter((element) => {       
    return element.title.toLowerCase().includes(search.toLowerCase())        
    })
    Display(filtered)
})


// ******************filterbycolor********************//

let filtersel = document.getElementById("fitrByColor")
filtersel.addEventListener("change", () =>{

    function FilterData(data){
        let filterValue = filtersel.value
        if(filterValue === ""){
          Display(data)
        }
        else {
          data = data.filter((element,) => {
            return element.color == filterValue
           })
           Display(data)
        }
        
      }

      FilterData(newData)

})


// ********************filterbyprice****************//




let filterprice = document.getElementById("fitrByPrice")
let from = document.getElementById("lower")
let to = document.getElementById("upper")
let submit = document.getElementById("filter-btn")

submit.addEventListener("click",()=>{

  let formPrice = Number(from.value)
  let toPrice = Number(to.value)

  let filterP = newData.filter((ele)=>{

    if((formPrice === null)|| (toPrice === null)){
      Display(newData)
    }
    else if((ele.price >=formPrice)&&(ele.price<=toPrice)){
      return true
    }
    else {
      return false
    }
  })
  Display(filterP)
})

// ********************filterbyrating****************//

let filterrate = document.getElementById("fitrByRating")
let frm = document.getElementById("low")
let too = document.getElementById("up")
let submiting = document.getElementById("filter-rate")

submiting.addEventListener("click",()=>{

  let formRate = Number(frm.value)
  let toRate = Number(too.value)

  let filterR = newData.filter((ele)=>{

    if((formRate === null)|| (toRate === null)){
      Display(newData)
    }
    else if((ele.rating >=formRate)&&(ele.rating<=toRate)){
      return true
    }
    else {
      return false
    }
  })
  Display(filterR)
})


// ********************sortbyprice****************//


let sortbyprice = document.getElementById("sortbyprice")

sortbyprice.addEventListener("change",()=>{


  function SortbyPrice(data){
    let sortbypValue = sortbyprice.value
    if(sortbypValue === ""){
      Display(data)
    }
    else if (sortbypValue == "lowToHigh"){
        data.sort((a,b)=> a.price-b.price)
       Display(data)
    }
    else if (sortbypValue == "HighToLow"){
        data.sort((a,b)=> b.price - a.price)
        Display(data)
    }
  }
  SortbyPrice(newData)

})


// ----------------------sortbyratings-----------------------//


let sortbyratings = document.getElementById("sortbyratings")

sortbyratings.addEventListener("change",()=>{


  function SortbyRate(data){
    let sortbyRValue = sortbyratings.value
    if(sortbyRValue === ""){
      Display(data)
    }
    else if (sortbyRValue == "lowToHigh"){
        data.sort((a,b)=> a.rating-b.rating)
       Display(data)
    }
    else if (sortbyRValue == "HighToLow"){
        data.sort((a,b)=> b.rating - a.rating)
        Display(data)
    }
  }
  SortbyRate(newData)

})


let GoToHomePage = document.getElementById("GoToHomePage")
GoToHomePage.addEventListener("click", ()=>{
  window.location.assign("/index.html")
})