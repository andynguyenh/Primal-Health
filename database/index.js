// const firebase = require('firebase-admin');

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// const config = require('../config');


// const db = firebase.initializeApp(config);

const serviceAccount = require('../config.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();



module.exports = db

