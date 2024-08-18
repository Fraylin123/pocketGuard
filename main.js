let subscriptionsNumberValue = 0; 
const subscriptionsArray = [];

//Start if condition here

const subscriptionsNumber = document.getElementById("subscriptionsNumber");
subscriptionsNumber.addEventListener("change", onChange);
let button = document.getElementById("submitButton");
button.onclick = buttonClick;

document.querySelector("#subscriptionContainer2").style.display = "none";
document.querySelector("#subscriptionContainer3").style.display = "none";
document.querySelector("#subscriptionContainer4").style.display = "none";
document.querySelector("#subscriptionContainer5").style.display = "none";
document.querySelector("#subscriptionContainer6").style.display = "none";
document.querySelector("#subscriptionContainer7").style.display = "none";
document.querySelector("#subscriptionContainer8").style.display = "none";
document.querySelector("#subscriptionContainer9").style.display = "none";
document.querySelector("#subscriptionContainer10").style.display = "none";


function buttonClick() {
  subscriptionsNumberValue = document.getElementById("subscriptionsNumber").value;

  
  for (let i = 1; i <= subscriptionsNumberValue; i++){
    let currentSubscription = {
      name : document.getElementById("subscription"+i).value,
      price: document.getElementById("price"+i).getElementsByTagName("input")[0].value,
      status: document.getElementById("status"+i).value
    };

    subscriptionsArray.push(currentSubscription);
  }
  localStorage.setItem('subscriptionsArray', JSON.stringify(subscriptionsArray));
  localStorage.setItem("number", subscriptionsNumberValue);
  
}

function onChange() {
  subscriptionsNumberValue = document.getElementById(
    "subscriptionsNumber"
  ).value;
  if (subscriptionsNumberValue == 1) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "none";
    document.querySelector("#subscriptionContainer3").style.display = "none";
    document.querySelector("#subscriptionContainer4").style.display = "none";
    document.querySelector("#subscriptionContainer5").style.display = "none";
    document.querySelector("#subscriptionContainer6").style.display = "none";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 2) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "none";
    document.querySelector("#subscriptionContainer4").style.display = "none";
    document.querySelector("#subscriptionContainer5").style.display = "none";
    document.querySelector("#subscriptionContainer6").style.display = "none";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 3) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "none";
    document.querySelector("#subscriptionContainer5").style.display = "none";
    document.querySelector("#subscriptionContainer6").style.display = "none";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 4) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "none";
    document.querySelector("#subscriptionContainer6").style.display = "none";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 5) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "none";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 6) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "flex";
    document.querySelector("#subscriptionContainer7").style.display = "none";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 7) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "flex";
    document.querySelector("#subscriptionContainer7").style.display = "flex";
    document.querySelector("#subscriptionContainer8").style.display = "none";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 8) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "flex";
    document.querySelector("#subscriptionContainer7").style.display = "flex";
    document.querySelector("#subscriptionContainer8").style.display = "flex";
    document.querySelector("#subscriptionContainer9").style.display = "none";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 9) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "flex";
    document.querySelector("#subscriptionContainer7").style.display = "flex";
    document.querySelector("#subscriptionContainer8").style.display = "flex";
    document.querySelector("#subscriptionContainer9").style.display = "flex";
    document.querySelector("#subscriptionContainer10").style.display = "none";
    document.querySelector("#submitButton").style.display= "flex";
  } else if (subscriptionsNumberValue == 10) {
    document.querySelector("#subscriptionContainer1").style.display = "flex";
    document.querySelector("#subscriptionContainer2").style.display = "flex";
    document.querySelector("#subscriptionContainer3").style.display = "flex";
    document.querySelector("#subscriptionContainer4").style.display = "flex";
    document.querySelector("#subscriptionContainer5").style.display = "flex";
    document.querySelector("#subscriptionContainer6").style.display = "flex";
    document.querySelector("#subscriptionContainer7").style.display = "flex";
    document.querySelector("#subscriptionContainer8").style.display = "flex";
    document.querySelector("#subscriptionContainer9").style.display = "flex";
    document.querySelector("#subscriptionContainer10").style.display = "flex";
    document.querySelector("#submitButton").style.display= "flex";
  }
}



