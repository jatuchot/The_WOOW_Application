// At the top of test/index.test.js
const test = require('firebase-functions-test')({
    apiKey: "AIzaSyDWr7TVHyPVeTrViIp5VN9DsBbVbd66w3o",
    authDomain: "travel-planner-790f3.firebaseapp.com",
    databaseURL: "https://travel-planner-790f3.firebaseio.com",
    projectId: "travel-planner-790f3",
    storageBucket: "travel-planner-790f3.appspot.com",
    messagingSenderId: "350058824351"
  });

  // after firebase-functions-test has been initialized
const myFunctions = require('../index.js'); // relative path to functions code

const wrapped = test.wrap(myFunctions.manageTravelPlan);

const data = {
  "operation": "create",
  "planData": {
    "name": "trip name",
    "description": "lorem ipsum",
    "author": "R4dazMUsGORi2kWtL4efHTov9CC2",
    "dateCreated": "2015-10-26T07:46:36.611Z",
    "dateModified": "2015-10-26T07:46:36.611Z",
    "isPublic": false,
    "shareUrl": null,
    "nodes": [
      {
        "nodeType": "place",
        "name": "Wat Phra Kaew",
        "description": "The Temple of the Emerald Buddha (officially known as Wat Phra Sri Rattana Satsadaram) is regarded as the most important Buddhist temple in Thailand.",
        "latitude": 9.96233,
        "longitude": 49.80404,
        "url": "https://www.example.com/watphrakaew",
        "picUrl": "https//:www.example.com/pic.jpg",
        "duration": 120
      },
      {
        "nodeType": "transport",
        "type": "bus",
        "name": "Bus line 35ร",
        "latitude": 9.96233,
        "longitude": 49.80404,
        "duration": 15
      }
    ]
  }
}

wrapped(data)
