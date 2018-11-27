const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const db = admin.firestore();

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
