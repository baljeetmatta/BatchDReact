import { useEffect, useState } from "react";
import { BugType } from "./Bugs"
import { BUG_RESOLVED, store } from "./BugStore"
type BugProps={
    bugs:BugType[];
}
//const BugList=(props:BugProps)=>{
    const BugList=()=>{
        const [bugs,setBugs]=useState<BugType[]|undefined>([]);
        useEffect(()=>{
            setBugs(store.getState().bugs)
            
            const unsubscibe=store.subscribe(()=>{
                setBugs(store.getState().bugs)
            })
            
        },[])

//unsubscibe();

        // useEffect(()=>{
        //         setBugs(store.getState())

        // },[])
        const resolveHandler=(e:React.MouseEvent,id:number)=>{
                // const existingBugs=bugs.map((item)=>{
                //     if(item.id==id)
                //         item.resolved=true
                //     return item;
                // })
                // setBugs(existingBugs);
                store.dispatch({
                    type:BUG_RESOLVED,
                    payload:{
                        id:id
                    }
                })
                setBugs(store.getState().bugs)
                console.log(store.getState());
        
        
        
            }
    return (

        <>
         <div className="grid grid-cols-4 gap-2">
       
         {
            bugs?.map((item)=>{
                return (
                    <div className="p-2 flex gap-4 bg-gray-200">
                        <div>{item.description}</div>
                        <div>{item.resolved?"Resolved":<button onClick={(e)=>{resolveHandler(e,item.id)}} className="bg-red-300 p-2 text-white rounded-md">Resolve</button>}</div>

                    
                    </div>

                )
        })
           
        }
        </div>
        </>
    )
}
export default BugList;