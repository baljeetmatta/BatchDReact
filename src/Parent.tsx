import { useState } from "react";
import Child from "./Child"

const Parent=()=>{
    //let data="Hi";
    const [data,setData]=useState("Hi");

    return (
        <>
        <div>
            {data}
            
        </div>
        <Child data={data} code={setData}/>
        </>
    )
}
export default Parent;