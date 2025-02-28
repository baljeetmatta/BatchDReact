import { useContext } from "react";
import { UserContext } from "./context";
import { User } from "./UserDashboard";

type ProfileProps={
    user?:User
}
const Profile=(props:ProfileProps)=>{
     const user=useContext(UserContext)
    return (
        <>
        <div>Profile {user?.name}</div>
        </>
    )
}
export default Profile;
