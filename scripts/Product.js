let PrAPI = "https://63c6dfbcd307b7696742e8ff.mockapi.io/newone/13"
let newData = []

function FetchData(){
    fetch(PrAPI)
    .then((element)=> {
        return element.json()
    })
    .then((maindata)=> {
        
        newData = maindata
        console.log(newData)
        Display(newData)
    })
    .catch((err)=>{
        console.log(err);
    })
}
FetchData()


let cartData = JSON.parse(localStorage.getItem("cart")) || []




let container = document.getElementById("main")

function Display(data){
    container.innerHTML=""

    let div1 = document.createElement("div")
    div1.className = "div1"

    let image1 = document.createElement("img")
    image1.src = data.image
    image1.addEventListener("click",()=> {
    image1.style.borderColor = "#00a9e0"  
    img2.style.borderColor = "gray"
    img3.style.borderColor = "gray"


    image.src = data.image
    })

    let img2 = document.createElement("img")
    img2.src = data.img2
    img2.addEventListener("click",() =>{
    img2.style.borderColor = "#00a9e0"
    image1.style.borderColor = "gray"
    image.src = data.img2
    img3.style.borderColor = "gray"
    
    })

    let img3 = document.createElement("img")
    img3.src = data.img3
    img3.addEventListener("click",() =>{
    img3.style.borderColor = "#00a9e0"
    image1.style.borderColor = "gray"
    image.src = data.img3
    img2.style.borderColor = "gray"

    })

    let img4 = document.createElement("img")
    img4.src = data.img4



    let div2 = document.createElement("div")
    div2.className = "div2"

    let image = document.createElement("img")
    image.src = data.image




    let div3 = document.createElement("div")
    div3.className = "div3"

    let price = document.createElement("h3")
    price.innerText = `₹ ${data.price}`

    let title = document.createElement("p")
    title.innerText = data.title

    let ratings = document.createElement("p")
    ratings.innerText = "Ratings: "+data.rating+" ⭐"

    let size = document.createElement("p")
    size.innerText = "select size"

    let divSub3_1 = document.createElement("div")
    divSub3_1.className = "divSub3_1"


    let btn1 = document.createElement("button")
    btn1.innerText = "4Y"
    btn1.addEventListener("click", ()=>{
    btn1.style.backgroundColor="#00a9e0"
    btn1.style.color="white"
    })
    btn1.className = "btn1"

    let btn2 = document.createElement("button")
    btn2.innerText = "6Y"

    let btn3 = document.createElement("button")
    btn3.innerText = "8Y-9Y"

    let btn4 = document.createElement("button")
    btn4.innerText = "10Y"

    let btn5 = document.createElement("button")
    btn5.innerText = "11Y"

    let btn6 = document.createElement("button")
    btn6.innerText = "12Y"

    let btn7 = document.createElement("button")
    btn7.innerText = "14Y"

    let btn8 = document.createElement("button")
    btn8.innerText = "15Y"

    let divSub3_2 = document.createElement("div")
    divSub3_2.className = "divSub3_2"

    let imageblk = document.createElement("img")
    imageblk.src = data.image

    let imagered = document.createElement("img")
    imagered.src = data.imgred

    let imagepink = document.createElement("img")
    imagepink.src = data.imgpink

    let color = document.createElement("p")
    color.innerText = "Colors available"
    color.className = "color"

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart"

    // let cartbtn = document.createElement("button")
    // cartbtn.innerText = "Go to Cart"
    
    let cartAnchor = document.createElement("a")
    cartAnchor.href = "./cart.html"
    cartAnchor.innerText = "Go to Cart"

    btn.addEventListener("click",()=>{
        if(CheckDuplicate(data)){
            alert("Product Already in cart")
          }
          else {
            cartData.push({...data,quantity:1})
            localStorage.setItem("cart",JSON.stringify(cartData))
            alert("Product Added to cart")
            counting()


          }
    })


    console.log(cartData);


    let detail = document.createElement("p")
    detail.innerText = "Details"
    detail.className = "detail"
    detail.addEventListener("click", ()=>{
        desc.innerHTML = data.description+`<br> Features: <br>• Short sleeves <br>• Ribbed neckline <br>• Cinched waist <br>• Tulle tutu skirt <br> Fabric & Care:<br>• 100% cotton lightweight jersey <br>• Tutu skirt: 100% polyester tulle <br>• Imported <br>• Machine washable`  
        desc.style.textAlign ="justify"
    })

    let desc = document.createElement("p")
    desc.innerText = ""

    div1.append(image1,img2,img3,img4)
    div2.append(image)
    divSub3_1.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8)
    divSub3_2.append(imageblk,imagered,imagepink)
    div3.append(price,title,ratings,color,divSub3_2,size,divSub3_1,btn,cartAnchor,detail,desc)

    container.append(div1,div2,div3)

// })
}


function CheckDuplicate(product){
    for(let i=0; i<cartData.length; i++){

    if(cartData[i].id === product.id){
        return true
      }
    }
    return false
}


let itemCount = document.getElementById("count-item")
function counting(){
    itemCount.innerText =  cartData.length
}
