const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);
exports.setUserInfoFirestore = functions.auth.user().onCreate((user) => {
  const usersCollection = db.collection('users');
  const data = {
    createdDate: new Date(),
    modifiedDate: new Date(),
    email: user.email,
    name: user.displayName,
    picUrl: user.photoURL,
    roleId: 0
  }
  const setData = usersCollection.doc(user.uid).set(data);
});

/* 'text' from data.text, 'auth' from context.auth */
const validateSession = (auth) => {
  // Checking that the user is authenticated.
  if (!auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }
}


const validatePlanData = (planData) => {
  const isNameString = (typeof planData.name === 'string');
  const isDescriptionString = (typeof planData.description === 'string');
  const isAuthorString = (typeof planData.author === 'string');
  const isDateCreatedString = (typeof planData.dateCreated === 'string');
  const isDateModifiedString = (typeof planData.dateModified === 'string');
  const isIsPublicBoolean = (typeof planData.isPublic === 'boolean');
  const isShareUrlStringOrNull = ((typeof planData.shareUrl === 'string' && planData.isPublic === true) || (planData.shareUrl === null && planData.isPublic === false));
  const isNodesArrayOrNull = Array.isArray(planData.nodes);
  const isAllNodesValid = [];
  if(!(isNameString && isDescriptionString && isAuthorString && isDateCreatedString && isDateModifiedString && isDateModifiedString && isIsPublicBoolean && isShareUrlStringOrNull && isNodesArrayOrNull && isNodesArrayOrNull)) {
    throw new functions.https.HttpsError('invalid-argument', 'The data provided is not in right format.');
  }
  if(!(moment(planData.dateCreated, moment.ISO_8601).isValid() && moment(planData.dateModified, moment.ISO_8601).isValid())) {
    throw new functions.https.HttpsError('invalid-argument', 'created date or modified date have incorrect format');
  }

  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(urlRegex);
  if(planData.shareUrl !== null) {
    if(!planData.shareUrl.match(regex)) {
      throw new functions.https.HttpsError('invalid-argument', 'url is not in the right format.');
    }
  }
  const nodes = planData.nodes;
  for(let i = 0;i < planData.length; i++) {
    const isNodeTypeStringAndSpecificWords = (typeof nodes[i].nodeType === 'string') && (nodes[i].nodeType === 'place' || nodes[i].nodeType === 'transport');

    const isNameString = (typeof nodes[i].name === 'string');
    const isLatitudeString = (typeof nodes[i].latitude === 'number');
    const isLongitudeString = (typeof nodes[i].longitude === 'number');
    const isDurationNumber = (typeof nodes[i].duration === 'number');

    if(!(isNodeTypeStringAndSpecificWords && isNameString && isLatitudeString && isLongitudeString && isDurationNumber)) {
      throw new functions.https.HttpsError('invalid-argument', 'incorrect common node format');
    }
    if(nodes[i].nodeType === 'place') {
      const isDescriptionString = (typeof nodes[i].description === 'string');
      const isUrlString = (typeof nodes[i].url === 'string');
      const isPicUrlString = (typeof nodes[i].picUrl === 'string');
      if(!(isDescriptionString && isUrlString && isPicUrlString)) {
        throw new functions.https.HttpsError('invalid-argument', 'incorrect node format');
      }
      if(!nodes[i].url.match(regex)) {
        throw new functions.https.HttpsError('invalid-argument', 'url is not in the right format in nodes url.');
      }
      if(!nodes[i].picUrl.match(regex)) {
        throw new functions.https.HttpsError('invalid-argument', 'url is not in the right format in nodes picUrl.');
      }
      if(!(isDescriptionString && isUrlString && isPicUrlString)) {
        throw new functions.https.HttpsError('invalid-argument', 'incorrect node format');
      }
    }
  }
}

const createTravelPlan = (planData, auth) => {
  validatePlanData(planData);
  const usersCollection = db.collection('plans');
  const data = planData;

  data.author = db.doc('users/' + auth.uid);
  data.dateCreated = new Date(planData.dateCreated);
  data.dateModified = data.dateCreated;

  return usersCollection.add(data);
}

exports.manageTravelPlan = functions.https.onCall((data, context) => {
  context.auth = { uid: 'R4dazMUsGORi2kWtL4efHTov9CC2'};
  validateSession(context.auth);
  switch(data.operation) {
    case 'create':
      return createTravelPlan(data.planData, context.auth);
    case 'edit':
      return editTravelPlan(data.planData);
    case 'delete':
      return deleteTravelPlan(data.planData);
    default:
      throw new functions.https.HttpsError('failed-precondition', 'Invalid data operation.');
  }
});


