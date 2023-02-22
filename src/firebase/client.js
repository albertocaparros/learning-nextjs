import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBPsAfXXeQVJMS5gxFpLL3lIdhTqdVWPhA',
	authDomain: 'twitter-clone-92a8f.firebaseapp.com',
	projectId: 'twitter-clone-92a8f',
	storageBucket: 'twitter-clone-92a8f.appspot.com',
	messagingSenderId: '442968734554',
	appId: '1:442968734554:web:9dc550ada6d8002dca1163',
	measurementId: 'G-DEBLC3RVM1',
};

const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider(app);

const mapUserFromFirebaseAuthToUser = (firebaseUser) => {
	return {
		avatar: firebaseUser.photoURL,
		name: firebaseUser.displayName,
		email: firebaseUser.email,
	};
};

export const loginWithGithub = () => {
	const auth = getAuth();

	return signInWithPopup(auth, provider);
};

export const onAuthStateChanged = (onChange) => {
	const auth = getAuth();

	return auth.onAuthStateChanged((user) => {
		const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
		onChange(normalizedUser);
	});
};
