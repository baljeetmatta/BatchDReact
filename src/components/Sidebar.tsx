import { useContext } from "react";
import { User } from "./UserDashboard";
import { UserContext } from "./context";

type SidebarProps={
    user?:User
}
const Sidebar=(props:SidebarProps)=>{
     const user=useContext(UserContext)
    return (
        <>
        <div>Sidebar {user?.name}</div>
        </>
    )
}
export default Sidebar;
