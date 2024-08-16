"use client"
import { app } from "../../firebaseConfig";
import { getFirestore, collection, addDoc, doc} from "firebase/firestore";
import "firebase/firestore";
import { getAuth } from "firebase/auth"

const firestore = getFirestore(app);

async function saveUrl(userId: string, data: {originalUrl: string, shortenedUrl: string}) {
    try{
        const userDocRef = doc(firestore, 'users', userId);

        const urlDocRef = await addDoc(collection(userDocRef, 'urls'), {
            data
        });
        console.log('URL added with ID:', urlDocRef.id);
    } catch (error) {
        console.error('Error creating subcollection:', error);
    }
    }







