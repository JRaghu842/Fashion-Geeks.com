let hreflink = document.getElementById("hrefLogin")
console.log(hreflink);


let userName = localStorage.getItem("name")
console.log(userName);

if(userName){
    hreflink.innerText = userName
}


let submit = document.getElementById("submit")


submit.addEventListener("click", (e)=>{
e.preventDefault();

let Name = document.getElementById("Name").value
let Email = document.getElementById("Email").value
let Password =  document.getElementById("Password").value
let CPassword =  document.getElementById("CPassword").value



if( Name == "" || Email== "" || Password == "" || CPassword == ""){
    alert("Input field has no value")
}
else if(Password !== CPassword){
    alert("Password not matching")
}
else {
    

localStorage.setItem("name",Name)
localStorage.setItem("email",Email)
localStorage.setItem("password",Password)
localStorage.setItem("cpassword",CPassword)
alert("Registration successful")
window.location.assign("login.html")

}

})


let GoToHomePage = document.getElementById("GoToHomePage")
GoToHomePage.addEventListener("click", ()=>{
  window.location.assign("/index.html")
})