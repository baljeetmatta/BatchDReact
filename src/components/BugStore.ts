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
interface StateType{
    bugs:BugType[]
}
//const BugReducer=(state:BugType[]=[],action:ActionType)=>{
    const BugReducer=(state:StateType|undefined={bugs:[]},action:ActionType)=>{


    switch(action.type)
    {
        case BUG_ADDED:
            const existingBugs=[...state.bugs];
            existingBugs.push({
                id:lastid++,
                description:action.payload.description,
                resolved:false
            })
            return {...state,bugs:existingBugs}
            break;
            case BUG_RESOLVED:
                
                const updateBugs=state.bugs.map((item)=>{
                    if(item.id==action.payload.id)
                        item.resolved=true
                    return item;
                })
                return {...state,bugs:updateBugs}
                break;
             default:
                return state;
    }


}
import {persistStore,persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"//localStorage
const config={
    key:'BugRoot',
    storage

}
const pReducer=persistReducer(config,BugReducer);
export const store=createStore(pReducer);
export const pstore=persistStore(store);


//export const store=createStore(BugReducer) ;
//1. Local Storage
//2. Object
/*
{
    bugs:[
    {
    }
    ]
}
PersistStore,PersitReducer

*/
