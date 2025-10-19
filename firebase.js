// Firebase Initialization
// This file initializes Firebase for the application

const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');
const { getStorage } = require('firebase/storage');

// Load Firebase configuration
// You can either use the config file or environment variables
let firebaseConfig;

try {
  // Try to load from firebase-config.js (not committed to repo)
  firebaseConfig = require('./firebase-config.js');
} catch (error) {
  // Fallback to environment variables
  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export Firebase services for use in the application
module.exports = {
  app,
  db,
  auth,
  storage,
  firebaseConfig
};

console.log('Firebase initialized successfully for project:', firebaseConfig.projectId);
