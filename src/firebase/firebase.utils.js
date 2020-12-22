import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD-qkMt9CjOIFkVMBUQd1-2SY8Ls75t0Ow',
	authDomain: 'crwn-db-d5241.firebaseapp.com',
	projectId: 'crwn-db-d5241',
	storageBucket: 'crwn-db-d5241.appspot.com',
	messagingSenderId: '1085565490390',
	appId: '1:1085565490390:web:2d4966c926b4b863036577',
	measurementId: 'G-XVFHV216EX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
