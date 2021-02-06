import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useFireMessage = ({ user = null }) => {
  const [messages, setMessages] = useState([]);
  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    const db = firebase.firestore();
    const query = db.collection('messages').orderBy('createdAt').limit(100);

    const unsubscribe = query.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(data);
      setMessages(data);
    });

    return unsubscribe;
  }, []);

  const sendFireMessage = (trimmedMessage) => {
    const db = firebase.firestore();

    // Add new message in Firestore
    db.collection('messages').add({
      message: trimmedMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL,
    });
  };

  return {
    messages,
    sendFireMessage,
  };
};
