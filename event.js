let button = document.querySelector(".dark");
let currentMode = "light";

function switchToDark(){
    let body = document.querySelector("body");
    if(currentMode==="light"){
        body.style.backgroundColor = "black";
        button.innerText = "Switch to Light Mode";
        currentMode="dark";
    }else{
        body.style.backgroundColor = "white";
        button.innerText = "Switch to Dark Mode";
        currentMode="light";
    }
}

button.addEventListener("click", switchToDark);