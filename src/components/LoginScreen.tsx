import { useContext, useRef } from "react";
import { LoginContext, UserType } from "./LoginContext";
import { Navigate, useNavigate } from "react-router-dom";
const LoginScreen = () => {
    const navigate=useNavigate();
 const user=   useContext<UserType|undefined>(LoginContext)
    const inputRef = useRef<HTMLInputElement | null>(null);
    const loginHandler = () => {

        user?.setName(inputRef.current?.value)

        //console.log(inputRef.current?.value)
        //if (inputRef.current)
           // inputRef.current.value = "Data";
    }
    const logoutHandler=()=>{
        user?.setName(undefined);
        navigate("/login");

    }

    if(user?.name)
        return <button onClick={logoutHandler}>Logout</button>
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={loginHandler}>Login </button>
        </>
    )

}
export default LoginScreen