const subscriptionsNumber = document.getElementById("subscriptionsNumber");
const subscriptionsArray = [];
subscriptionsNumber.addEventListener("change", onChange);
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
          "anime": "Few Titles; mostly dubbed",
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




let button = document.getElementById("submitButton");
let subscriptionsNumberValue = 0;

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
  const subscriptionsNumberValue = document.getElementById("subscriptionsNumber").value;
  

  
  for (let i = 1; i <= subscriptionsNumberValue; i++){
    let currentSubscription = {
      name : document.getElementById("subscription"+i).value,
      price: document.getElementById("price"+i).getElementsByTagName("input")[0].value
    };

    subscriptionsArray.push(currentSubscription);
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


