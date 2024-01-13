const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".country-box select");

for(let select of dropdowns){
    for(let codes in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=codes;
        newOption.value=codes;
        select.append(newOption);

        if(select.name==="from" && codes==="USD"){
            newOption.selected="selected";
        }

        if(select.name==="to" && codes==="INR"){
            newOption.selected="selected";
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })

}

function updateFlag(element){
    let currCode = element.value;
    let country = countryList[currCode];
    let flagURL = `https://flagsapi.com/${country}/flat/64.png`;

    let image = element.parentElement.querySelector("img");
    image.src=flagURL;
}


let button = document.querySelector(".convert-button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    convert();
})

let fromCurrency = document.querySelector(".from-country select");
let toCurrency = document.querySelector(".to-country select");

let resultMessage = "";
async function convert(){
    // /usd/inr.json
    let fromCurrencyValue = fromCurrency.value.toLowerCase();
    let toCurrencyValue = toCurrency.value.toLowerCase();
    let url = `${BASE_URL}/${fromCurrencyValue}/${toCurrencyValue}.json`;
    let response = await fetch(url);
    let data = await response.json();
    
    let conversionFactor = data[toCurrencyValue];
    let initialAmount = document.querySelector(".amount-value");
    if(initialAmount.value==="" || initialAmount.value <= 0){
        resultMessage = "Please enter a valid amount";
    }else{
       let finalValue = initialAmount.value * conversionFactor;
       resultMessage = `${initialAmount.value} ${fromCurrency.value} = ${finalValue} ${toCurrency.value}`;
    }

    let conversionMessage = document.querySelector(".conversion-message");
    conversionMessage.innerText = resultMessage;
}