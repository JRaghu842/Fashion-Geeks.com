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

    // let ancher = document.createElement("a")
    // ancher.href = "http://127.0.0.1:5500/pages/Product.html"

    card.append(image, line, title, price, desc)
    // ancher.append(card)
    // container.append(ancher)
    container.append(card)


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





