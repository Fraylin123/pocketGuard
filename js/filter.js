
let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number');
let ranks = {};
let category = ['Movies','Shopping','Music','Gaming','Utilities'];


let totalPrice = 0;
for (let i=0; i < number; i++){
    totalPrice+=parseInt(array[i].price);
    const liElement = document.createElement("li");
    const textNode = document.createTextNode(array[i].name + ": $" + array[i].price + "\t");
    liElement.style.marginLeft= '10px';
    liElement.appendChild(textNode);

    const subList = document.getElementById("subscriptionsList");
    subList.style.padding = 'auto';
    subList.appendChild(liElement);
}

let billsDiv = document.getElementsByClassName("bills")[0]
const spanElement = document.createElement("span");
const totalNode = document.createTextNode("Your total: " + "$" + totalPrice);
spanElement.appendChild(totalNode);
billsDiv.appendChild(spanElement);

const dropboxes = document.getElementsByClassName("dropboxes");


function clickLogic(){
    for (let i = 0; i < dropboxes.length; i++){
        ranks[category[i]] = dropboxes[i].value;
    }  
    localStorage.setItem('categoriesRank', JSON.stringify(ranks));
}
