# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase setup

#### Create new project

Go to [Firebase](https://console.firebase.google.com/) and add new project name it the name you like 👍. 

#### Allow signin with google

From Authentication section select sign-in-method then under sign-in providers enable `Google`

#### Create new web app

From project overview -> project settings under `Your apps` section add web app and then copy values and pate it inside `.env` file after rename `.env.example` file.


#### Create Cloud Firestore

From Cloud Firestore section `+ Start collection` and name it `messages`. 


#### Update security rules

```javascript
rules_version='2'
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    match /messages/{docId} {
      allow read: if request.auth.uid != null;
      allow create: if canCreateMessage();
    }
    function Message() {
       let isSignedIn = request.auth.uid != null;
       let isOwner = request.auth.uid == request.resource.data.uid;
       let isNotBanned = exist(/databases/$(database)/documents/banned/$(request.auth.uid)) == false;
       return isSignedIn && isOwner && isNotBanned;
    }
  }
}
```

#### Add backed service using firebase


#### Deploy to firebase hosting


## Technology stack

[React](https://reactjs.org/) as frontend framework, [create-react-app](https://create-react-app.dev/) as build system and [Tailwind CSS](https://tailwindcss.com/) as UI design system.

