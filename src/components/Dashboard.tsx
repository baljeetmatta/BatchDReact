import { useContext } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import {User} from "./UserDashboard";
import { UserContext } from "./context";

type DashboardProps={
    user?:User
}
const Dashboard=(props:DashboardProps)=>{

    const user=useContext(UserContext)
    return (
        <>
        <div>Dashboard - {user?.name}</div>
        <Sidebar />
        <Profile/>


        </>
    )


}
export default Dashboard;
