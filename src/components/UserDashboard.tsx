import { UserContext } from "./context";
import Dashboard from "./Dashboard";

export interface User{
    name:string,
    isSubscribed:boolean;
}

const UserDashboard=()=>{
    let user:User={
        name:"Code",
        isSubscribed:false

    }
    return (
        <>
        <UserContext.Provider value={user}>
        <Dashboard/>
        </UserContext.Provider>

        </>
    )

}
export default UserDashboard;