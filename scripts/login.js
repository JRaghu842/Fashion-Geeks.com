let hreflink = document.getElementById("hrefLogin")
console.log(hreflink);


let userName = localStorage.getItem("name")
console.log(userName);

if(userName){
    hreflink.innerText = userName
}



let submit = document.getElementById("Lsignin")


submit.addEventListener("click", (e)=>{
e.preventDefault(); 

let LEmail = document.getElementById("LEmail").value
let LPassword =  document.getElementById("LPassword").value


let REmail = localStorage.getItem("email")
let RPassword = localStorage.getItem("password")

if(LEmail == "" || LPassword == ""){
    alert("Input field has no value")
}
else if(LEmail==REmail && LPassword == RPassword){
    window.location.assign("/index.html")
    alert("Login Success")
}
else {
    alert("Wrong Email or password")
}
})


let GoToHomePage = document.getElementById("GoToHomePage")
GoToHomePage.addEventListener("click", ()=>{
  window.location.assign("/index.html")
})