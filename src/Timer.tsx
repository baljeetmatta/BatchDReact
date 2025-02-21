import { useEffect, useState } from "react";

const Timer=()=>{
    //let count=1;
    const [count,setCount]=useState(0);
    const timerTick=()=>{
        //count++;
        setCount(count+1);
    }
    useEffect(()=>{
        let id= setInterval(timerTick,1000);
        console.log(id);
        return ()=>clearInterval(id);
   
     //without dependency - for each render 
     //empty dependency list -> only once  
    },[count])//dependency list-list of variables
   return(
    <>
    {count}
    </>
   )
}
export default Timer;
//regular funtion 
//arrow function must be defined earlier 