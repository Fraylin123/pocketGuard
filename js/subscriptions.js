let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')

const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");
const totalEl = document.getElementById("totalc");
let inactiveSubs = [];
let activeSubs = [];
let totalCost = 0;

for (let i = 0; i < number; i++) {
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");

    if (array[i].status == "Active") {
        pElement.id = "subsText";
        pElement.innerHTML = "You are currently subscribed and using " + array[i].name + " paying $" + array[i].price;
        imgElement.src = "html/images/" + array[i].name + ".png";
        imgElement.id = "slogo";

        divElement.id = "subs";
        divElement.append(imgElement);  //Append the image and text element to the created div element
        divElement.append(pElement);
        leftSide.appendChild(divElement);

        const priceElement = document.createElement("p"); //p elements for the total price hover section
        priceElement.innerHTML = "$" + array[i].price;
        totalCost += parseInt(array[i].price);
        totalEl.appendChild(priceElement);
        activeSubs.push({ name: array[i].name, price: array[i].price }); //Array of objects with name and price property to get the price of each subscription and handle logic in suggestions.js

    }
    else if (array[i].status == "Inactive") {
        pElement.id = "unsubsText";
        pElement.innerHTML = "You are subscribed but aren't using " + array[i].name + " ($" + array[i].price + ")";
        imgElement.src = "html/images/" + array[i].name + ".png";
        imgElement.id = "slogo";

        divElement.id = "unsubs";
        divElement.append(imgElement);
        divElement.append(pElement);

        rightSide.appendChild(divElement);
        inactiveSubs.push(array[i].name); //If the current subscription was marked as inactive then add to the inactiveSubs array.
    }
}

//Add the total cost of the active subscriptions
const hElement = document.createElement("h2");
const textNode = document.createTextNode("$" + totalCost);
hElement.appendChild(textNode);
totalEl.appendChild(hElement);

localStorage.setItem("cost", totalCost);
localStorage.setItem("inactiveSubscriptions", JSON.stringify(inactiveSubs));
//Sort the active subscriptions array in descending order based on the price
activeSubs.sort((a, b) => b.price - a.price);
localStorage.setItem("activeSubscriptions", JSON.stringify(activeSubs));