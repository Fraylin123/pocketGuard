

let array = JSON.parse(localStorage.getItem('subscriptionsArray'));
let number = localStorage.getItem('number')

console.log(array);
console.log(number);

for (let i=0; i < number; i++){
    const liElement = document.createElement("li");
    const textNode = document.createTextNode(array[i].name + ": " + array[i].price);
    liElement.appendChild(textNode);

    const subList = document.getElementById("subscriptionsList");
    subList.appendChild(liElement);

}