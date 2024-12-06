let categoriesRank = JSON.parse(localStorage.getItem('categoriesRank'));
let targetCost = localStorage.getItem('targetCost');
let subscriptionsArray = JSON.parse(localStorage.getItem('subscriptionsArray'));
let subscriptionsCost = parseInt(localStorage.getItem('cost'));
let inactiveCost = parseInt(localStorage.getItem('inactiveCost'));
const activeSubscriptions = JSON.parse(localStorage.getItem('activeSubscriptions'))
const inactiveSubscriptions = JSON.parse(localStorage.getItem('inactiveSubscriptions'));
const rightSide = document.getElementById("right");
const calculations = document.getElementsByClassName("calculations")[0];
let calculatedCost = 0;
let unsubscribeArray = [];


let subscriptionJSON = [{"Movies": ["Netflix", "Hulu"]}, {"Music": ["Spotify Premium", "Soundcloud Music"]}, {"Shopping": ["Amazon Prime", "Walmart +"]}, {"Utilities": ["Microsoft 365", "Avast"]}, {"Gaming": ["Xbox Gold", "Playstation +"]}];

//Gets the name of the subscription ranked by the value specified

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function inArray(subscriptionName, subscriptionsArray){
  for (let i = 0; i < subscriptionsArray.length; i++){
    if (subscriptionName == subscriptionsArray[i]){
      return true;
    }
  }
  return false;
}




function inactiveSubsCheck(){
    for (let i = 0; i < inactiveSubscriptions.length; i++){
      console.log("Inside inactive function");
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");
      pElement.id = "atext";
      pElement.innerHTML =  "We suggest that you unsubscribe to " + inactiveSubscriptions[i] + " as you have listed it as inactive";
      imgElement.id="amologo";
      imgElement.src = "html/images/" + inactiveSubscriptions[i] + ".png";
      rightSide.appendChild(imgElement);
      rightSide.appendChild(pElement);
      
    }
}


/*
Algorithm:

Check the lowest categories see what the new cost would be if 
Say we have category Utilities as 5, retrieve all subs name under category utilities, if one of our subscriptions is in that utility remove them.
*/


function descsortArray(array){
  let firstIndex = 0;
  let secondIndex = 0;
  for (let i = 0; i < subscriptionsArray.length; i++){
    if (array[0] == subscriptionsArray[i].name ){
      firstIndex = i;
      console.log("-----First index: " + firstIndex);
    }
    else if(array[1] == subscriptionsArray[i].name){
      secondIndex = i;
      console.log("-----Second index: " + secondIndex);
    }

  }

  if (parseInt(subscriptionsArray[firstIndex].price) < parseInt(subscriptionsArray[secondIndex].price)){
    array[1] = subscriptionsArray[firstIndex].name;
    array[0] = subscriptionsArray[secondIndex].name;
  }
  else if (parseInt(subscriptionsArray[secondIndex].price) < parseInt(subscriptionsArray[firstIndex].price)){
    array[1] = subscriptionsArray[secondIndex].name;
    array[0] = subscriptionsArray[firstIndex].name;
    
  }
  console.log("====Printed array is: " + array);
  return array;

}



let complete = false;
function unsubscribeLogic(){
  console.log("Check: " + JSON.stringify(activeSubscriptions))
  let currentCost = subscriptionsCost;
  console.log(subscriptionsArray);
  for (let i = 5; i > 0; --i){
    if (complete){
      break;
    }
    let currentCategory = getKeyByValue(categoriesRank, i.toString()); //Gets the category name based on the number assigned to it
    console.log("Current category is: " + currentCategory);
    let categorySubs = subscriptionJSON.find(sub => sub[currentCategory]); //Gets the subscriptions names that falls in the "currentCategory"
    console.log(categorySubs);
    let tempArray = categorySubs[currentCategory];
    console.log("Temp array is" + "\n" + tempArray);
    console.log("Inactive subscriptions are:\n" + inactiveSubscriptions);
    console.log("Active subscriptions are:\n" + activeSubscriptions);
    tempArray = tempArray.filter(sub => activeSubscriptions.some(activeSub => activeSub.name === sub));
    console.log("Filtered array is now: \n" + tempArray);

   
    for (let j = 0; j < activeSubscriptions.length; j++){
      if (tempArray.includes(activeSubscriptions[j].name)){
      console.log(activeSubscriptions[j].name + " is included");
      //Check the two options of tempArray before adding it to the unsubscribeArray in order to decrease the number of unsubscribed suggestions
      //Make a function that gets the price of the subscription based on the name of it
        currentCost -=  activeSubscriptions[j].price;
        console.log(currentCost);
        if (currentCost <= targetCost){
          unsubscribeArray.push({"name":activeSubscriptions[j].name, "category": currentCategory});
          calculatedCost = currentCost;
          console.log("Found answer");
          complete = true;
          console.log(unsubscribeArray);
          break;

        }
        else{
          unsubscribeArray.push({"name":activeSubscriptions[j].name, "category": currentCategory})
        }
       
      }
     

    }
    
  }

if (unsubscribeArray.length > 0){
  for (let i = 0; i < unsubscribeArray.length; i++){
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    pElement.id = "atext";
    pElement.innerHTML =  "We suggest that you unsubscribe to " + unsubscribeArray[i].name + " as " + unsubscribeArray[i].category + " category have lower priority";
    imgElement.id="amologo";
    imgElement.src = "html/images/" + unsubscribeArray[i].name + ".png";
    rightSide.appendChild(imgElement);
    rightSide.appendChild(pElement);

  }
  return true;

}
  
}


let subscriptions = [];


//Logic for handling inactive subscriptions

const pElement1 = document.createElement("p");
const pElement2 = document.createElement("p");
const pElement3 = document.createElement("p");
let inactiveCondition = inactiveSubscriptions.length > 0 && subscriptionsCost <= inactiveCost
let unsubscribeCondition = subscriptionsCost > targetCost
if (inactiveCondition){
  inactiveSubsCheck()
  pElement1.innerHTML = "Doing these things will save you " + (inactiveCost-subscriptionsCost) +  " dollars!";
  pElement2.innerHTML = "Pre Total: - " + "$" + inactiveCost;
  pElement3.innerHTML = "Total: " + "$" + subscriptionsCost;
  calculations.appendChild(pElement1);
  calculations.appendChild(pElement2);
  calculations.appendChild(pElement3);
}


if(unsubscribeCondition){
  unsubscribeLogic()
  pElement1.innerHTML = "Doing these things will save you " + (inactiveCost-calculatedCost) +  " dollars!";
  pElement2.innerHTML = "Pre Total: - " + "$" + inactiveCost;
  pElement3.innerHTML = "Total: " + "$" + calculatedCost;
  calculations.appendChild(pElement1);
  calculations.appendChild(pElement2);
  calculations.appendChild(pElement3);

}

if (!inactiveCondition && !unsubscribeCondition){
  pElement1.innerHTML = "No suggestions"
  calculations.appendChild(pElement1);

}



//subscriptionCost = total of the subscriptions prices
//currentPayingCost - subscription(s) + alternative means unsubscribe from those subscriptions and alternative means to subscribe to that one if the condition is true

/*
while (subscriptionsCost > targetCost){
    let currentCategory = getKeyByValue(categoriesRank, '5');
    console.log("Category is: " + currentCategory);
    console.log(typeof(currentCategory));
    let categoryJSON = subscriptionJSON.subscriptions[0][currentCategory];
    console.log(categoryJSON);
    for (let i = 0; i < Object.keys(categoryJSON).length; i++){
        let currentSubPrice = parseInt(categoryJSON[i].price);
        let subscriptionName = categoryJSON[i].name;
        if (inArray(subscriptionName, subscriptionsArray)){ //If netflix is in the list of subscriptions add it to buffer
          subscriptions.append({"name":subscriptionName, "price": currentSubPrice});
        } 
        else{
          alternatives.append({"name":subscriptionName, "price": currentSubPrice});
          //Split the ones that the user listed at the beginning and the alternatives
        }
     }
     
     //alternativesAlg(subscriptions, alternatives, )


    
    break;
    
  
}
    */
//Double loop to check all alternatives and if not found then unsubscribe from the service.

/*
<img id="amologo" src="html/images/amazon">
                <p id="atext"> We suggest that you unsuscribe to Amazon Prime as you have listed it as inactive</p>

                <img id="amologo" src="html/images/microsoft365.jpg">
                <p id="atext"> We suggest that you unsuscribe from microsoft 365 we have provided a cheaper alternative
                    in the suscribe box.</p>
*/