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

    let image = document.createElement("img")
    image.src = element.image

    let line = document.createElement("hr")

    let title = document.createElement("p")
    title.innerText = element.title

    let price = document.createElement("h3")
    price.innerText = `₹ ${element.price}`

    let desc = document.createElement("p")
    desc.innerText = element.description


    card.append(image, line, title, price, desc)
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
    window.location.href ="pages/Category_page.html"
})





