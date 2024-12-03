let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')


const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");
const totalEl = document.getElementById("totalc");
let inactiveSubs = [];
let totalCost = 0;

for (let i=0; i < number; i++){
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    
    if (array[i].status == "Active"){
        pElement.id = "subsText";
        pElement.innerHTML = "You are currently subscribed and using " + array[i].name + " paying $" + array[i].price;
        imgElement.src = "html/images/"+ array[i].name + ".png";
        imgElement.id = "slogo";
        
        divElement.id = "subs";
        divElement.append(imgElement);  //Append the image and text element to the created div element
        divElement.append(pElement);
        leftSide.appendChild(divElement);

        const priceElement = document.createElement("p"); //p elements for the total price hover section
        priceElement.innerHTML = "$"+ array[i].price;
        totalCost+=parseInt(array[i].price);
        totalEl.appendChild(priceElement);

    }
    else if (array[i].status == "Inactive"){
        
        pElement.id = "unsubsText";
        pElement.innerHTML = "You are subscribed but aren't using " + array[i].name + " ($" + array[i].price + ")";
        imgElement.src = "html/images/"+ array[i].name + ".png";
        imgElement.id = "slogo";

        
        
        divElement.id = "unsubs";
        divElement.append(imgElement);
        divElement.append(pElement);
        
        rightSide.appendChild(divElement);
        inactiveSubs.push(array[i].name);
    } 
}

const hElement = document.createElement("h2");
const textNode = document.createTextNode("$" + totalCost);
hElement.appendChild(textNode);
totalEl.appendChild(hElement);

localStorage.setItem("cost", totalCost);
localStorage.setItem("inactiveSubscriptions", JSON.stringify(inactiveSubs));