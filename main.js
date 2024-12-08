let subscriptionsNumberValue = 0;
let subscriptionsArray = [];

const subscriptionsNumber = document.getElementById("subscriptionsNumber");
subscriptionsNumber.addEventListener("change", onChange);
let button = document.getElementById("submitButton");
button.onclick = buttonClick;

for (let i = 2; i <= 10; i++) {
  document.querySelector(`#subscriptionContainer${i}`).style.display = "none";
}


function buttonClick() {
  subscriptionsNumberValue = document.getElementById("subscriptionsNumber").value;
  let subnameSet = new Set();
  for (let i = 1; i <= subscriptionsNumberValue; i++) {
    let nameElement = document.getElementById("subscription" + i).value
    let priceElement = document.getElementById("price" + i).getElementsByTagName("input")[0].value
    let statusElement = document.getElementById("status" + i).value

    if (!priceElement || isNaN(priceElement)) {
      alert(nameElement + " price is not a valid number or is empty, please fix to continue");
      subscriptionsArray = [];
      return;
    }
    if (statusElement.length < 1) {
      alert(nameElement + " is missing an active/inactive value, please fix to continue");
      subscriptionsArray = [];
      return;
    }

    if (subnameSet.has(nameElement)) {
      alert(nameElement + " was already selected, choose a different subscription");
      subscriptionsArray = [];
      return;
    }

    subnameSet.add(nameElement);

    const currentSubscription = {
      name: nameElement,
      price: priceElement,
      status: statusElement
    };

    subscriptionsArray.push(currentSubscription);
  }

  localStorage.setItem('subscriptionsArray', JSON.stringify(subscriptionsArray));
  localStorage.setItem("number", subscriptionsNumberValue);
  window.location.href = 'filter.html';


}

function onChange() {
  subscriptionsNumberValue = parseInt(document.getElementById("subscriptionsNumber").value);
  for (let i = 1; i <= 10; i++) {
    const currentInput = document.querySelector(`#subscriptionContainer${i}`);
    currentInput.style.display = i <= subscriptionsNumberValue ? 'flex' : 'none';
  }

  document.querySelector("#submitButton").style.display = "flex";
}