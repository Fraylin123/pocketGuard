let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')


for (let i=0; i < number; i++){
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    const leftSide = document.getElementById("left");
    const rightSide = document.getElementById("right");
    if (array[i].status == "active"){
        pElement.innerHTML = "You are currently subscribed to " + array[i].name + " paying " + array[i].price;
        pElement.id = "subsText";
        imgElement.src = "html/images/"+ array[i].name + ".png";
        imgElement.id = "slogo";
        divElement.append(pElement);
        leftSide.appendChild(divElement);



    }

    
    rightSide.appendChild(divElement);

    divElement.append(imgElement);
    divElement.append(pElement);



    const textNode = document.createTextNode(array[i].name + ": $" + array[i].price + "\t");

}