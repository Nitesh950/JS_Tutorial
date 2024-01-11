const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let button = document.querySelector(".btn");

window.addEventListener("load", convert);


let dropdowns = document.querySelectorAll(".country select");

for(let select of dropdowns){
    for(let codes in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = codes;
        newOption.value = codes;
        if(select.name==="from" && codes==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to" && codes==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    })
}

function updateFlag(element){
    let currCode = element.value;
    let image = element.parentElement.querySelector("img"); 
    let countryCode = countryList[currCode];
    let newImage = `https://flagsapi.com/${countryCode}/flat/64.png`;
    image.src=newImage;
}

let fromCurrency = document.querySelector(".from-country select");
let toCurrency = document.querySelector(".to-country select");


button.addEventListener("click", (event) => {
    event.preventDefault();
    convert();

});



async function convert(){
    let amountInput = document.querySelector(".amount input");
    let enteredAmount = amountInput.value;

    let url = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;


    let response =  await fetch(url);
    let data = await response.json();
   
    let conversionFactor = data[toCurrency.value.toLowerCase()];

    let finalValue= enteredAmount * conversionFactor;
 

    let exchangeResult = document.querySelector("#exchange-msg");
    exchangeResult.innerText = `${enteredAmount} ${fromCurrency.value} = ${finalValue} ${toCurrency.value}`;

    
}








