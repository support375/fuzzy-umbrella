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
  
  // Validate that required environment variables are set
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
    throw new Error(
      'Firebase configuration is incomplete. Please ensure you have either:\n' +
      '1. Created firebase-config.js with your project credentials, OR\n' +
      '2. Set the required environment variables (FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_APP_ID)'
    );
  }
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

// Log only in development mode to avoid exposing sensitive information
if (process.env.NODE_ENV !== 'production') {
  console.log('Firebase initialized successfully for project:', firebaseConfig.projectId);
}
