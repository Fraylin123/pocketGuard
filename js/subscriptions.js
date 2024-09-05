let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')


const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");

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