let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')


const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");
const totalEl = document.getElementById("totalc");
let totalCost = 0;

for (let i=0; i < number; i++){
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    
    if (array[i].status == "Active"){
        console.log("Inside")
        pElement.id = "subsText";
        pElement.innerHTML = "You are currently subscribed to " + array[i].name + " paying $" + array[i].price;
        imgElement.src = "html/images/"+ array[i].name + ".png";
        imgElement.id = "slogo";
        
        divElement.id = "subs";
        divElement.append(imgElement)
        divElement.append(pElement);
        
        leftSide.appendChild(divElement);
        const priceElement = document.createElement("p");
        priceElement.innerHTML = "$"+ array[i].price;
        totalCost+=parseInt(array[i].price);
        totalEl.appendChild(priceElement);

    }
    else if (array[i].status == "Inactive"){
        pElement.id = "unsubsText";
        pElement.innerHTML = "You are not subscribed to " + array[i].name + " ($" + array[i].price + ")";
        imgElement.src = "html/images/"+ array[i].name + ".png";
        imgElement.id = "slogo";
        
        divElement.id = "unsubs";
        divElement.append(imgElement);
        divElement.append(pElement);
        
        rightSide.appendChild(divElement);
    }
    

}
const hElement = document.createElement("h2");
const textNode = document.createTextNode("$" + totalCost);
hElement.appendChild(textNode);
totalEl.appendChild(hElement);