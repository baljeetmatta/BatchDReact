import { createStore } from "redux";
import { BugType } from "./Bugs"

type ActionType={
    type:string,
    payload:{
        description?:string,
        id?:number
    }
}
export const BUG_ADDED="bugAdded";
export const BUG_RESOLVED="bugResolved";
let lastid=1;

const BugReducer=(state:BugType[]=[],action:ActionType)=>{


    switch(action.type)
    {
        case BUG_ADDED:
            const existingBugs=[...state];
            existingBugs.push({
                id:lastid++,
                description:action.payload.description,
                resolved:false
            })
            return existingBugs;
            break;
            case BUG_RESOLVED:
                
                const updateBugs=state.map((item)=>{
                    if(item.id==action.payload.id)
                        item.resolved=true
                    return item;
                })
                return updateBugs
                break;
    }


}
export const store=createStore(BugReducer) ;
