import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDD6hy956EQHp-j-XOQSuKFFh272yQaFI8',
	authDomain: 'my-app-9eb7d.firebaseapp.com',
	projectId: 'my-app-9eb7d',
	storageBucket: 'my-app-9eb7d.appspot.com',
	messagingSenderId: '928748842145',
	appId: '1:928748842145:web:24d710709aad0cbeb894e0',
	measurementId: 'G-37N7M7M7X0',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
