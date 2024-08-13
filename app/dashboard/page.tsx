import History from "@/components/dashboard page/history"
import Overview from "@/components/dashboard page/overview"
import SideBar from "@/components/dashboard page/sidebar"
import TopNav from "@/components/dashboard page/topNav"
export default function Dashboard(){
    return(
        <div className="dashboard">
            <SideBar />

            <div className="dsh-main">
                <TopNav />
                <>
                <h1  className="dsh-hd">DASHBOARD</h1>
                <p className="dsh-p"> Overview</p>
                </>
                <Overview/>
                <p className="dsh-p">History</p>
                <History />

            </div>
           
        </div>
    )
}