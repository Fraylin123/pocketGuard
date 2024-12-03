let categoriesRank = JSON.parse(localStorage.getItem('categoriesRank'));
let targetCost = localStorage.getItem('targetCost');
let subscriptionsArray = localStorage.getItem('subscriptionsArray');
let subscriptionsCost = parseInt(localStorage.getItem('cost'));
let inactiveCost = parseInt(localStorage.getItem('inactiveCost'));
const inactiveSubscriptions = JSON.parse(localStorage.getItem('inactiveSubscriptions'));
let unsubscribeArray = [];
const rightSide = document.getElementById("right");
const calculations = document.getElementsByClassName("calculations")[0];

let subscriptionJSON = {
    "subscriptions": [
      {
        "Movies": [
          {
            "name": "Netflix",
            "price": "$8",
            "ads": "No ads",
            "library": "100,000 movies and TV Shows",
            "anime": "Few Titles; mostly dubbed",
          },
         {
            "name": "Hulu",
            "price": "$8",
            "ads": "Yes, $11.99 monthly for no ads",
           "library": "Around 1,650 shows and 2,500 movies",
           "anime": "Many titles: mostly subbed",
          },
        ],
        "Music": {
          "soundcloud": {
            "name": "Soundcloud Go +",
            "price": "$10",
            "ads":"No ads",
            "quality": "64Kbps"
          },
          "spotify":{
            "name": "Spotify Premium",
            "price": "$10",
            "ads":"No ads",
            "quality": "320Kbps (Best quality)"
          }
        }, 
        "Shopping":{
           "amazon": {
             "name": "Amazon Prime",
             "price": "$13",
             "shipping": "Free Two-Day Shipping, Free Same-Day Delivery, Free Release-Date Delivery",
             "extras": "Free Prime Video access as well as Prime Music and Prime Gaming"    
  
            },
           "walmart": {
             "name":" Walmart +",
             "price": "$13",
             "shipping": "Free Next-Day and Two-Day Shipping",
             "extras": "Free delivery from your store, Rx for less (Save 85% on seleted prescriptions)"
             }
        },
        "Utilities":{
              "microsoft":{
                "name": "Microsoft 365",
                "price": "$34.90" ,
                "features": "Access to Microsoft Word, Powerpoint, Excel, Publisher, Outlook, OneNote, and Access ",
  
              },
              "avast": {
                "name": "Avast Antivirus",
                "price": "$35" ,
                "features": "Free shipping ",
  
              }
        },
        "Gaming": {
            "xbox": {
              "name": "Xbox Gold",
              "price":"$9.99" ,
              "features": "Access over 100+ free games and enable online multiplayer",
            },
  
            "playstation": { 
              "name": "PlayStation Plus", 
              "price": "$9.99",
              "features":"Access online multiplayer, free exclusive games, and a monthly rotation of free downloadable playstation games"
              
            }
  
          }
  
      }
  
    ]
  };

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
  if (subscriptionsCost <= targetCost && subscriptionsCost <= inactiveCost){
    for (let i = 0; i < inactiveSubscriptions.length; i++){
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");
      pElement.id = "atext";
      pElement.innerHTML =  "We suggest that you unsubscribe to " + inactiveSubscriptions[i] + " as you have listed it as inactive";
      imgElement.id="amologo";
      imgElement.src = "html/images/" + inactiveSubscriptions[i] + ".png";
      rightSide.appendChild(imgElement);
      rightSide.appendChild(pElement);
      
    }
    return true;
  }
  else{
    return false;
  }
}


function unsubscribeLogic(){
  for (let i = 0; i < subscriptionsArray.length; i++){


  }
}

function alternativesAlg(totalCost, subCost, categoryJSON){
    if (totalCost - subCost + parseInt(categoryJSON[i].price) < parseInt(targetCost) ){
      console.log(categoryJSON[i].name)
      return categoryJSON[i].name;
    }

}


let subscriptions = [];

//Logic for handling inactive subscriptions
const pElement1 = document.createElement("p");
const pElement2 = document.createElement("p");
const pElement3 = document.createElement("p");
if (inactiveSubsCheck()){
  pElement1.innerHTML = "Doing these things will save you " + (inactiveCost-subscriptionsCost) +  " dollars!";
  pElement2.innerHTML = "Pre Total: - " + "$" + inactiveCost;
  pElement3.innerHTML = "Total: " + "$" + subscriptionsCost;
  calculations.appendChild(pElement1);
  calculations.appendChild(pElement2);
  calculations.appendChild(pElement3);
}
else{
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