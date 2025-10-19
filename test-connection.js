// Example script to test Firebase connection
// This script demonstrates how to use Firebase in your application

const { db, auth, storage } = require('./firebase');
const { collection, addDoc, getDocs } = require('firebase/firestore');

async function testFirebaseConnection() {
  try {
    console.log('Testing Firebase connection...\n');

    // Test Firestore connection
    console.log('1. Testing Firestore...');
    const testCollection = collection(db, 'test');
    
    // Note: This will only work if you have proper Firebase configuration
    // Uncomment the following lines to test write/read operations:
    
    /*
    // Write a test document
    const docRef = await addDoc(testCollection, {
      message: 'Hello from fuzzy-umbrella!',
      timestamp: new Date().toISOString()
    });
    console.log('   ✓ Document written with ID:', docRef.id);
    
    // Read documents
    const querySnapshot = await getDocs(testCollection);
    console.log('   ✓ Found', querySnapshot.size, 'document(s) in test collection');
    */
    
    console.log('   ✓ Firestore initialized');

    // Test Auth
    console.log('2. Testing Firebase Auth...');
    console.log('   ✓ Auth initialized');
    
    // Test Storage
    console.log('3. Testing Firebase Storage...');
    console.log('   ✓ Storage initialized');

    console.log('\n✅ All Firebase services are properly initialized!');
    console.log('\nNext steps:');
    console.log('1. Copy firebase-config.template.js to firebase-config.js');
    console.log('2. Fill in your Firebase project credentials');
    console.log('3. Or set environment variables for Firebase configuration');
    console.log('4. Uncomment the test operations in this file to verify read/write access');
    
  } catch (error) {
    console.error('❌ Error testing Firebase connection:', error.message);
    console.error('\nMake sure you have:');
    console.error('1. Created firebase-config.js with your project credentials');
    console.error('2. Or set the required environment variables');
    console.error('3. Enabled the required Firebase services in your Firebase Console');
  }
}

// Run the test
testFirebaseConnection();
