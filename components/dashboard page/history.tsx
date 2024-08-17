"use client"

import { DashboardContext } from "@/context/dash"
import { useContext } from "react"

export default function History(){
    const {data} =useContext(DashboardContext)

    interface UrlData {
        id: string;
        data?:{
        originalUrl?: string;
        shortenedUrl?: string;
        createdAt?: string;
        clickCount?: number;
        activity? : string
        }
    }
    return (
        <div className="history">
           

            <div className="category">
                <h2>URL</h2>
                <h2>Activity</h2>
                <h2>Date</h2>
                <h2>Status</h2>
            </div>
            

            <div className="link-hist">
                {data.length === 0?
            <p>you have not shorten any link yet</p>
            :

            <>
            {data.map((item:UrlData, index:number)=>(
                <div key={index} className="hist">
                    <p>{item.data?.shortenedUrl}</p>
                    <p>{item.data?.activity}</p>
                    <p>{item.data?.createdAt}</p>
                    <p>0</p>
                </div>
))}
</>
}
            </div>

            

        </div>
    )
}