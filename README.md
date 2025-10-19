# fuzzy-umbrella
Investment software with Firebase integration

## Overview
This is an investment management software connected to Firebase Studio project for real-time data storage, authentication, and cloud storage capabilities.

## Firebase Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A Firebase account and project

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Firebase

You have two options to configure Firebase:

#### Option A: Using Configuration File (Recommended for development)
1. Copy the template file:
   ```bash
   cp firebase-config.template.js firebase-config.js
   ```

2. Go to [Firebase Console](https://console.firebase.google.com/)
3. Select your project or create a new one
4. Go to Project Settings > General
5. Scroll down to "Your apps" and click on the web app icon (</>)
6. Copy the Firebase configuration object
7. Paste the values into `firebase-config.js`

#### Option B: Using Environment Variables (Recommended for production)
1. Copy the template file:
   ```bash
   cp .env.template .env
   ```

2. Fill in your Firebase credentials in the `.env` file
3. The application will automatically load these values

### Step 3: Enable Firebase Services

In your Firebase Console, enable the following services:
1. **Firestore Database**: For storing investment data
2. **Authentication**: For user management
3. **Storage**: For file uploads (if needed)

### Step 4: Test the Connection

Run the test script to verify your Firebase connection:
```bash
npm test
```

You should see output confirming that all Firebase services are initialized.

### Step 5: Run the Application

```bash
npm start
```

## Project Structure

```
fuzzy-umbrella/
├── firebase.js                  # Firebase initialization
├── firebase-config.template.js  # Configuration template
├── index.js                     # Main application entry point
├── test-connection.js          # Firebase connection test
├── .env.template               # Environment variables template
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Usage

Once configured, you can use Firebase services throughout your application:

```javascript
const { db, auth, storage } = require('./firebase');
const { collection, addDoc, getDocs } = require('firebase/firestore');

// Example: Add data to Firestore
async function addInvestment(data) {
  const investmentsRef = collection(db, 'investments');
  const docRef = await addDoc(investmentsRef, data);
  return docRef.id;
}
```

## Security Notes

- Never commit `firebase-config.js` or `.env` files to version control
- Use environment variables for production deployments
- Set up proper Firebase security rules in your Firebase Console
- Keep your Firebase API keys secure

## Support

For Firebase-specific issues, refer to:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase JavaScript SDK](https://firebase.google.com/docs/web/setup)

## License
See LICENSE file for details.
