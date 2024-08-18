let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')


for (let i=0; i < number; i++){
    console.log(array[i]);
    const liElement = document.createElement("li");
    const divElement = document.createElement("div");
    const leftSide = document.getElementById("")
    const textNode = document.createTextNode(array[i].name + ": $" + array[i].price + "\t");
    liElement.style.marginLeft= '10px';
    liElement.appendChild(textNode);

    const subList = document.getElementById("subscriptionsList");
    subList.style.padding = 'auto';
    subList.appendChild(liElement);
}