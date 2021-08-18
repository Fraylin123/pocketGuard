let subscriptionsNumber = document.getElementById("subscriptionsNumber");
subscriptionsNumber.addEventListener("change", onChange);
let userInputSubscriptions=[];
let temp;
let subscriptionJSON = {
  "subscriptions": [
    {
      "movies": {
        "netflix": {
          "name": "Netflix",
          "price": "$8",
          "ads": "No ads",
          "library": "100,000 movies and TV Shows",
          "anime": "Few Tittles; mostly dubbed",
        },
       "hulu": {
          "name": "Hulu",
          "price": "8",
          "ads": "Yes, $11.99 monthly for no ads",
         "library": "Around 1,650 shows and 2,500 movies",
         "anime": "Many titles: mostly subbed",
        }
      },
      "music": {
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
      "shopping":{
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
      "utilities":{
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
      "gaming": {
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


let emptySubscriptionList = [];

let button = document.getElementById("submitButton");
let subscriptionsNumberValue = 0;

button.addEventListener("click", onClick);

document.querySelector("#subscriptionContainer1").style.display = "none";
document.querySelector("#subscriptionContainer2").style.display = "none";
document.querySelector("#subscriptionContainer3").style.display = "none";
document.querySelector("#subscriptionContainer4").style.display = "none";
document.querySelector("#subscriptionContainer5").style.display = "none";
document.querySelector("#subscriptionContainer6").style.display = "none";
document.querySelector("#subscriptionContainer7").style.display = "none";
document.querySelector("#subscriptionContainer8").style.display = "none";
document.querySelector("#subscriptionContainer9").style.display = "none";
document.querySelector("#subscriptionContainer10").style.display = "none";
document.querySelector("#submitButton").style.display= "none";

function onClick(module) {
  subscriptionsNumberValue = document.getElementById(
    "subscriptionsNumber"
  ).value;
  if (subscriptionsNumberValue == 1) {
    userInputSubscriptions=[]
    userInputSubscriptions.push(document.getElementById("subscription1").value)
    console.log(userInputSubscriptions);
  }
  else if(subscriptionsNumberValue == 2){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    for (var i=0;i<2;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
    
    
    
    
  }
  else if(subscriptionsNumberValue == 3){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<3;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
    
    
  }
  else if(subscriptionsNumberValue == 4){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<4;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
   
   
  }
  else if(subscriptionsNumberValue == 5){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<5;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
    
   
    
  }
  else if(subscriptionsNumberValue == 6){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<6;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
  
  }
  else if(subscriptionsNumberValue == 7){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<7;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
  
  }
  else if(subscriptionsNumberValue == 8){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<8;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
   
  }
  else if(subscriptionsNumberValue == 9){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<9;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
    
  }
  else if(subscriptionsNumberValue == 10){
    userInputSubscriptions=[]
    temp= document.querySelectorAll(".subscriptions");
    console.log(temp);
    for (var i=0;i<10;i++){
      userInputSubscriptions.push(temp[i].value);
    }
    console.log(userInputSubscriptions);
    
  }
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


