import { useState } from "react";

// const Login=()=>{

//     //let data="Hi";
//     //let state= useState();
//     //console.log(state);
//    // let data=state[0];
//     //let setData=state[1];
//     // let obj={name:"First",age:20};
//     // let {age}=obj;
//     // console.log(age);
//     const [data,setData]=useState("Hi");



//     const clickHandler=()=>{
//         //data="Bye";
//         setData("Bye");

//        // console.log(data);

//     }
//     return (
//         <>
//         {data}
//         <button onClick={clickHandler}>Change</button>
//         </>
//     )
// }
type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
    const [user,setUser]=useState<UserType|null>(null);
    //const [user,setUser]=useState<UserType>({} as UserType);

    const loginHandler=()=>{
        setLogin(true);
        setUser({name:"Code",email:"Email@"})
    }
    const logoutHandler=()=>{
        setLogin(false);
        setUser(null)
        
    }
    return (
        <>
           <div> {isLoggedIn?'Logged in':'Logged out'}</div>
            {user?.name} {user?.email}
            <button onClick={loginHandler}>Log in </button>
            <button onClick={logoutHandler}>Log out</button>
        </>
    )
}
export default Login;

// npm install tailwindcss@3
// npx tailwindcss@3 init
// npm tailwindcss@3 -i ./ -o ./

//1. npm install tailwindcss @tailwindcss/vite
//2. vite.config
//  a. import tailwindcss from '@tailwindcss/vite'
//  b. plugins:[react(),tailwindcss()
//3. index.css
// @import "tailwindcss";