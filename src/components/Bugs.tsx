import { useRef, useState } from "react"
import { BuildEnvironment } from "vite";
import BugList from "./BugsList";
import { BUG_ADDED, BUG_RESOLVED, store } from "./BugStore";
export type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
//let lastid=1;
const Bugs=()=>{
    const [bugs,setBugs]=useState<BugType[]|undefined>([]);

    const addHandler=()=>{
        //store.getState();
        store.dispatch({
            type:BUG_ADDED,
            payload:{
                description:inputRef.current?.value
            }
        })
        setBugs(store.getState())
        console.log(store.getState());


        // const existingBugs=[...bugs];
        // existingBugs.push({
        //     id:lastid++,
        //     description:inputRef.current?.value,
        //     resolved:false
        // })
        // setBugs(existingBugs);


    }
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
        setBugs(store.getState())
        console.log(store.getState());



    }
    const inputRef=useRef<HTMLInputElement|null>(null);
    return (

        <>
        <input className="border" type="text" ref={inputRef}/>
        <button className="bg-red-300 p-2 text-white rounded-md" onClick={addHandler}>Add</button>
       
       <BugList/>
        </>
    )


}
export default Bugs