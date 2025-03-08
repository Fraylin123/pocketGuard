
let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number');
let ranks = {};
let category = ['Movies', 'Shopping', 'Music', 'Gaming', 'Utilities'];
let targetPrice = 0;

let totalPrice = 0;
for (let i = 0; i < number; i++) { //Loop to add each individual subscription price
    totalPrice += parseFloat(array[i].price);
    const liElement = document.createElement("li");
    const textNode = document.createTextNode(array[i].name + ": $" + array[i].price + "\t");
    liElement.style.marginLeft = '10px';
    liElement.appendChild(textNode);

    const subList = document.getElementById("subscriptionsList");
    subList.style.padding = 'auto';
    subList.appendChild(liElement);
}

let billsDiv = document.getElementsByClassName("bills")[0]
const spanElement = document.createElement("span");
const totalNode = document.createTextNode("Your total: " + "$" + totalPrice);
spanElement.appendChild(totalNode);
billsDiv.appendChild(spanElement); //Add total

const dropboxes = document.getElementsByClassName("dropboxes");

function clickLogic() {
    for (let i = 0; i < dropboxes.length; i++) { //Assigning values to the ranks object
        ranks[category[i]] = dropboxes[i].value;
    }
    targetPrice = document.getElementById('targetPrice').value;
    //Duplicates check logic
    const rankValues = Object.values(ranks);
    const uniqueValues = new Set(rankValues);
    if (!targetPrice || isNaN(targetPrice)) {
        alert("target price is not a valid number or is empty, please fix to continue")
    }
    else if (uniqueValues.size !== rankValues.length) {
        alert("There are multiple categories with the same value, please fix to continue");
    }
    else {
        localStorage.setItem('categoriesRank', JSON.stringify(ranks));
        localStorage.setItem('targetCost', targetPrice);
        localStorage.setItem('inactiveCost', totalPrice);
        window.location.href = '../html/subscriptions.html';
    }
}