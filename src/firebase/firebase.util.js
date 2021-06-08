import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpcKH4fcoQiXUo-br1sDJtyy7hB8bR7OI",
    authDomain: "kyrieclothingdb.firebaseapp.com",
    projectId: "kyrieclothingdb",
    storageBucket: "kyrieclothingdb.appspot.com",
    messagingSenderId: "772991744394",
    appId: "1:772991744394:web:3bd09aa7443f9879c5b073",
    measurementId: "G-0L0F80TFXH"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
