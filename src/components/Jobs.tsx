import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export type Jobstype={
    id:number,
    title:string,
    description:string,
    package:string
}
//import jobsData from "../jobs.json"
const Jobs=()=>{
   // const data=useLoaderData();
   const data=useLoaderData<Jobstype[]>();



    return (
        <>
        {/* {data} */}
        <div>Jobs Data</div>
        <div className="container">
            <div className="grid grid-cols-3 gap-4">

                {
                    data.map((item)=>{
                        return (
                            
                            <div className="bg-gray-300 p-3">
                                        <div><NavLink to={`/jobdetails/${item.id}`}> {item.title}</NavLink></div>
                                        <div>{item.description}</div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Jobs;

export const fetchData=async ()=>{
    // fetch("/jobs.json").then((response)=>{
    //     return response.json();
    // }).then((response)=>{
    //     return response;
    // })
  const response= await fetch("/jobs.json");
  const output=await response.json();
  console.log(output);
  return output;
   // return "Hi";
}