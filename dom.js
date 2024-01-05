//understand window object and document object before learning DOM



//query selector gives the first occurence of the tag/class/id. For fetching class, use .(dot). For id, use #
let heading = document.querySelector(".main-heading");

//there are  other ways to access elements such as, getElementById("idName"), getElementByClassName("className"),
//getElementByTagName("tagName"). But querySelector is the most popular one

//querySelectoreAll gives all occurences in the form of a node list
console.log(heading);
console.log(heading.tagName);   //return the type of tag. In this case 'div'
console.log(heading.innerHTML); //returns plain text or html tags in the element
console.log(heading.innerText); //returns all the text of the node and it's children
console.log(heading.textContent); //just like innerText but also tells us about hidden elements


//manipulating values and styles inside the div tag
let para = document.querySelector("p");
para.innerText = "DOM stands for : " + para.innerText;


let divAttribute = heading.getAttribute("class");

console.log(divAttribute);
heading.setAttribute("class", "main-heading-alt");

//adding element to our div

//step 1 -> create an element
let submitButton = document.createElement("button");
submitButton.innerText = "Submit";

//step 2 -> add this button inside the div

heading.append(submitButton);
//heading.prepend(submitButton);    would have added the button at the start of the div
//heading.before(submitButton);    would have added the button before the div
//heading.prepend(submitButton);    would have added the button right after the div



//manipulating the style of the button through JS

submitButton.style.width = "200px";
submitButton.style.height="50px";
submitButton.style.margin="20px";
submitButton.style.borderRadius="25px";






