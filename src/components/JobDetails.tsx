import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Jobstype } from "./Jobs";
const JobDetails=()=>{
    const data:Jobstype=useLoaderData<Jobstype>();
    return (
        <>
        <div className="container">
            <div className="bg-gray-200">
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.package}</div>

            </div>
        </div>
        
        </>
    )

}
export default JobDetails;
export const fetchJobDetails=async ({params}:LoaderFunctionArgs)=>{
    const id=Number(params.id);

  const response= await fetch("/jobs.json");
  const output:Jobstype[]=await response.json();
  console.log(output);
  const filteredData=output.filter((item)=>{
    if(item.id==id)
        return true;
  })

  return filteredData[0];
   // return "Hi";
}