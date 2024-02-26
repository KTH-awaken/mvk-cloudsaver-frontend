// Importera Firebase-moduler
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut } from 'firebase/auth';

// Firebase-konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyDZGAhlYDrkcmBzxCUn9ywIge2920IDfe8",
    authDomain: "cloud-saver-96e35.firebaseapp.com",
    projectId: "cloud-saver-96e35",
    storageBucket: "cloud-saver-96e35.appspot.com",
    messagingSenderId: "940566730832",
    appId: "1:940566730832:web:dd8d375e14425a03efd955",
    measurementId: "G-KSY8RKDCYC"
};

// Initialisera Firebase
export const app = initializeApp(firebaseConfig);

// Få autentiseringsinstansen
const auth = getAuth(app);

// Funktion för att registrera användare
function registerUser(email: string, password: string): void {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Användaren skapades framgångsrikt
            const user = userCredential.user;
            console.log('Användarregistrering lyckades', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Fel vid användarregistrering:', errorCode, errorMessage);
        });
}
export function loginUser(email: string, password: string): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Inloggningen lyckades
            const user = userCredential.user;
            console.log('Inloggning lyckades', user);
            // Hantera framgångsrik inloggning här, t.ex. omdirigera användaren
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Fel vid inloggning:', errorCode, errorMessage);
            // Hantera fel vid inloggning här
        });
}
export function logoutUser(): void {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log('Utloggning lyckades');
        // Hantera ytterligare logik efter utloggning här, t.ex. omdirigera användaren
    }).catch((error) => {
        console.error('Fel vid utloggning:', error);
    });
}
