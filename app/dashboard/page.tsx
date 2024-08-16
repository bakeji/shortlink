"use client"
import History from "@/components/dashboard page/history"
import Overview from "@/components/dashboard page/overview"
import SideBar from "@/components/dashboard page/sidebar"
import TopNav from "@/components/dashboard page/topNav"
import { app } from "../../firebaseConfig";
import { getFirestore, collection, addDoc, doc, getDocs} from "firebase/firestore";
import "firebase/firestore";
import { DashboardContext } from "@/context/dash"
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"


export default function Dashboard(){
    interface UrlData {
        originalUrl?: string;
        shortenedUrl?: string;
        createdAt?: Date;
        clickCount?: number;
    }
    
    const [data, setData] = useState<UrlData[]> ([])
    const auth = getAuth();
const currentUser = auth.currentUser;



    const firestore = getFirestore(app);

    // save urls to firestore
async function saveUrl( data: {originalUrl: string, shortenedUrl: string, activity:string, date: string}):Promise<void> {
   if(currentUser){
    const UserId = currentUser.uid;
    try{
        const userDocRef = doc(firestore, 'users', UserId);
        const urlDocRef = await addDoc(collection(userDocRef, 'urls'), {
            data
        });
        console.log('URL added with ID:', urlDocRef.id);
    } catch (error) {
        console.error('Error creating subcollection:', error);
    }
}
    }

    // get urls from firestore

const getUrlsForUser = async () => {
    if(currentUser){
        const UserId = currentUser.uid;
    try {
        const userDocRef = doc(firestore, 'users', UserId);

        const urlsCollectionRef = collection(userDocRef, 'urls');

        const urlsSnapshot = await getDocs(urlsCollectionRef);

        // Map over the documents and get the data
        const urls = urlsSnapshot.docs.map(doc => ({
            ...doc.data()
        }));
            setData(urls)
    } catch (error) {
        console.error('Error getting URLs:', error);
        throw error;
    }

}
};

useEffect(() => {
    getUrlsForUser()
})
   
    return(
        <DashboardContext.Provider value={{saveUrl, data, getUrlsForUser}}>
                <div className="dashboard">
                    <SideBar />

                    <div className="dsh-main">
                        <TopNav />
                        <>
                        <h1  className="dsh-hd">DASHBOARD</h1>
                        <p className="dsh-p"> Overview</p>
                        </>
                        <Overview />
                        <p className="dsh-p">History</p>
                        <History />

                    </div>
                
                </div>
        </DashboardContext.Provider>
    )
}