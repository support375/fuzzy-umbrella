// Main application entry point for fuzzy-umbrella
// Investment software with Firebase integration

const { db, auth, storage } = require('./firebase');

console.log('Welcome to Fuzzy Umbrella - Investment Software');
console.log('Firebase services are ready to use!');

// Example: Your application code goes here
// You can now use db, auth, and storage throughout your application

// Example usage (commented out):
/*
const { collection, addDoc } = require('firebase/firestore');

async function createInvestment(data) {
  const investmentsRef = collection(db, 'investments');
  const docRef = await addDoc(investmentsRef, data);
  return docRef.id;
}

async function main() {
  // Your application logic here
}

main().catch(console.error);
*/
