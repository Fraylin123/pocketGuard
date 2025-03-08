let categoriesRank = JSON.parse(localStorage.getItem('categoriesRank'));
let targetCost = localStorage.getItem('targetCost');
let subscriptionsCost = parseInt(localStorage.getItem('cost'));
let inactiveCost = parseInt(localStorage.getItem('inactiveCost'));
const activeSubscriptions = JSON.parse(localStorage.getItem('activeSubscriptions'))
const inactiveSubscriptions = JSON.parse(localStorage.getItem('inactiveSubscriptions'));
const rightSide = document.getElementById("right");
const calculations = document.getElementsByClassName("calculations")[0];
let calculatedCost = 0; //Cost that met the target value requirement the user specified in filter.js page
let unsubscribeArray = []; //Array that contains the name of the subscriptions that the user should unsubscribe from
let subscriptionJSON = [{ "Movies": ["Netflix", "Hulu"] }, { "Music": ["Spotify Premium", "Soundcloud Music"] }, { "Shopping": ["Amazon Prime", "Walmart +"] }, { "Utilities": ["Microsoft 365", "Avast"] }, { "Gaming": ["Xbox Gold", "Playstation +"] }];

//Gets the category of the subscription specified (value)
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//Logic to handle inactive subscriptions
function inactiveSubsCheck() {
  for (let i = 0; i < inactiveSubscriptions.length; i++) {
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    pElement.id = "atext";
    pElement.innerHTML = "We suggest that you unsubscribe to " + inactiveSubscriptions[i] + " as you have listed it as inactive";
    imgElement.id = "amologo";
    imgElement.src = "html/images/" + inactiveSubscriptions[i] + ".png";

    rightSide.appendChild(imgElement);
    rightSide.appendChild(pElement);

  }
}

let complete = false; //Marker that indicates when to stop looping, true = target cost criteria reached so stop looping
function unsubscribeLogic() {
  let currentCost = subscriptionsCost;
  for (let i = 5; i > 0; --i) { //One iteration for each category on descending order to eliminate lower priority subscriptions first
    if (complete) {
      break;
    }

    let currentCategory = getKeyByValue(categoriesRank, i.toString()); //Gets the category name based on the number assigned to it
    let categorySubs = subscriptionJSON.find(sub => sub[currentCategory]); //Gets the subscriptions names that falls in the "currentCategory"
    let tempArray = categorySubs[currentCategory];
    tempArray = tempArray.filter(sub => activeSubscriptions.some(activeSub => activeSub.name === sub)); //Gets the subscriptions that are active and falls in the current category

    for (let j = 0; j < activeSubscriptions.length; j++) {
      if (tempArray.includes(activeSubscriptions[j].name)) { //Makes sure that the subscriptions are checked in the right order based on their assigned priority number.
        currentCost -= activeSubscriptions[j].price;
        if (currentCost <= targetCost) {
          unsubscribeArray.push({ "name": activeSubscriptions[j].name, "category": currentCategory });
          calculatedCost = currentCost;
          complete = true; //The currentCost is lower or equal to the targetCost so the algorithm is complete.
          break;
        }
        else {
          unsubscribeArray.push({ "name": activeSubscriptions[j].name, "category": currentCategory })
        }
      }
    }
  }

  if (unsubscribeArray.length > 0) {
    for (let i = 0; i < unsubscribeArray.length; i++) {
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");
      pElement.id = "atext";
      pElement.innerHTML = "We suggest that you unsubscribe to " + unsubscribeArray[i].name + " as " + unsubscribeArray[i].category + " category have lower priority";
      imgElement.id = "amologo";
      imgElement.src = "html/images/" + unsubscribeArray[i].name + ".png";
      rightSide.appendChild(imgElement);
      rightSide.appendChild(pElement);

    }
    return true;
  }
}

const pElement1 = document.createElement("p");
const pElement2 = document.createElement("p");
const pElement3 = document.createElement("p");
let inactiveCondition = inactiveSubscriptions.length > 0 && subscriptionsCost <= inactiveCost
let unsubscribeCondition = subscriptionsCost > targetCost

if (inactiveCondition) {
  inactiveSubsCheck()
  pElement1.innerHTML = "Doing these things will save you " + (inactiveCost - subscriptionsCost) + " dollars!";
  pElement2.innerHTML = "Pre Total: - " + "$" + inactiveCost;
  pElement3.innerHTML = "Total: " + "$" + subscriptionsCost;
  calculations.appendChild(pElement1);
  calculations.appendChild(pElement2);
  calculations.appendChild(pElement3);
}

if (unsubscribeCondition) {
  unsubscribeLogic()
  pElement1.innerHTML = "Doing these things will save you " + (inactiveCost - calculatedCost) + " dollars!";
  pElement2.innerHTML = "Pre Total: - " + "$" + inactiveCost;
  pElement3.innerHTML = "Total: " + "$" + calculatedCost;
  calculations.appendChild(pElement1);
  calculations.appendChild(pElement2);
  calculations.appendChild(pElement3);
}

if (!inactiveCondition && !unsubscribeCondition) {
  pElement1.innerHTML = "No suggestions"
  calculations.appendChild(pElement1);
}