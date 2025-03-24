// // // //Function as first-class citizen
// // // //entity -> assign to variable, return , argument
// // // function sayHello()
// // // {
// // //     console.log("Hello");



// // // }
// // // //sayHello();
// // // //const fn=sayHello;
// // // //fn();
// // // // function greet(fn)
// // // // {
// // // //     fn();
// // // // }
// // // // greet(10);

// // // function greet()
// // // {
// // //         return function()
// // //         {
// // //             return "hello"
// // //         }
// // // };
// // // const fn=greet();
// // // console.log(fn());
// // // //Higher Order Functions
// // // // return function, arguments function


// // //PURE FUNCTIONS
// // // function getNumber(number)
// // // {
// // //     return number*Math.random();
// // // }
// // // console.log(getNumber(10));
// // // function add(a,b)
// // // {
// // //     return a+b;
// // // }

// // // function getNumber(number)
// // // {
// // //     return number*2;

// // // }
// // // let minAge=27;
// // // function isEligible(age,minAge)
// // // {
// // //     return age>minAge;
// // // }
// // // console.log(isEligible(20,minAge));
// // // function trim(str)
// // // {
// // //     return str.trim();
    
// // // }
// // // const trim=(str)=>{
// // //     return str.trim();const

// // // }
// // import compose from "lodash/fp/compose.js"
// // import pipe from "lodash/fp/pipe.js"

// // const trim=str=>str.trim();
// // const toLower=str=>str.toLowerCase();


// // let input="   Javascript   ";
// // //let output="<div>"+input+"</div>";
// // //let output=`<div>${trim(input)}</div>`
// // // function wrap(element){
// // //     return function(str){
// // //     return `<${element}>${str}</${element}>`;
// // //     }
// // // }
// // const wrap=element=>str=>`<${element}>${str}</${element}>`;

// // //console.log(wrap("div",input));
// // //console.log(wrap("span",input));

// // //let output=wrap(toLower(trim(input)));
// // //let fn=compose(wrap,toLower,trim);
// // let fn=pipe(trim,toLower,wrap("div"));
// // let output=fn(input);
// // console.log(output);
// // //Currying
// // //Multiple arguments -> Single Argument
// // // function add(a,b)
// // // {
// // //     return a+b;
// // // }
// // // function add(a)
// // // {
// // //     return function(b)
// // //     {
// // //         return a+b;
// // //     }
// // // }
// // //console.log(add(1,2));
// // // let fnAdd=add(4);
// // // let result=fnAdd(2);
// // // console.log(result);
// // //console.log(add(4)(6));


// //const data=person;//shallow copy
// // data.name="Test";
// // console.log(data,person);

// // let arr=[34,4,5];
// // function fun(arr,arr1)
// // {
// //     console.log(arr,arr1);


// // }
// // fun(...arr);
// //const person={"name":"Code",age:10};
// // const person={
// //     name:"Code",
// //     age:10,
// //     address:{
// //         city:"Abc"
// //     }
// // }
// // //const data={...person};
// // const data={
// //     ...person,
// //     address:{
// //         ...person.address
// //     }
// // }
// // data.name="Test";
// // data.address.city="City"
// // console.log(data,person);
// // immutable
// //string->immutable
// // let str="Javascript";
// // const str1=str.toLowerCase();
// // console.log(str1,str);
// // str="ab";
// //let book ={"title":"First book",isPublished:false};
// // console.log(book.title)
// // book.isPublished=true;
// // console.log(book)

// // function publish(b)
// // {
// //         b.isPublished=true;
    
// // }
// // console.log(book);
// // publish(book);
// // console.log(book);
// // import {Map} from "immutable"
// // let book =Map({"title":"First book",isPublished:false});
// // //MAP API ->set of functions
// // //set, get, toJS
// // //console.log(book.title);
// // //console.log(book.get("title"));
// // //console.log(book.toJS())
// // //const book1=book.set("isPublished",true);
// // //console.log(book1.toJS(),book.toJS())
// // function publish(book)
// // {
// //     //book.isPublished=true;
// //    const newbook= book.set("isPublished",true);
// //    return newbook;



// // }
// // const nbook=publish(book);
// // console.log(nbook.toJS())
// import { produce } from "immer";
// let book={"title":"First Book",isPublished:false};
// function publish(book)
// {
//      const nbook=   produce(book,(draftObject)=>{
//                 draftObject.isPublished=true;
//         })
//         return nbook;



// }
// const nbook=publish(book);
// console.log(nbook);


/*

ACTIONS - Events ->Dispatch 

STORE (existing state)

REDUCER (existing state, action) event handler
return the update state, store

1.  Design a Store (objects)
2. Define actions
3. Reducer
4. Setup store

1. Design a Store (obj) structure
//Bug Trakcing/Todo 
[
        {
                id:number,
                description:string,
                resolved:boolean
        }
]
        //1 reducer
//Shopping
{
        carts:[
                {}
        ]
        currentUser:{}
        categories:[]

}
        //3 slices, 3 reducers

2. ADD_BUG, RESOLVE_BUG, DELETE_BUG
bugAdded,bugResolved,bugDeleted
action=>object->flux
{
        type:"bugAdded",
        payload:{
                description:"First Bug"
        }
}
        {
        type:"bugResolved",
        payload:{
                id:1
        }
}

3. Reducer -> function ->state,action
existing state,
what happened - object
return update state->store

4. Setup the store



*/
import { createStore } from "redux";
let lastid=1;
function BugReducer(state=[],action)
{
        if(action.type=="bugAdded")
        {
                const updateState=[...state];
                updateState.push({
                        id:lastid++,
                        description:action.payload.description,
                        resolved:false
                })
                return updateState;
        }
        if(action.type=="bugResolved")
                {
                      const  updateState=state.map((item)=>{
                        if(item.id==action.payload.id)
                                item.resolved=true;
                        return item;

                       }) 
                        return updateState;
                }

        return state;

}

const store=createStore(BugReducer);

console.log(store.getState());

store.dispatch({
        type:"bugAdded",
        payload:{
                description:"First Bug"
        }
});
store.dispatch({
        type:"bugAdded",
        payload:{
                description:"Second Bug"
        }
});

console.log(store.getState());


store.dispatch({
        type:"bugResolved",
        payload:{
                id:1
        }
});


const addBug=description=>{
       
        store.dispatch({
                type:"bugAdded",
                payload:{
                        description:description
                }
        });
}
const deleteBug=id=>{
       
        store.dispatch({
                type:"bugDeleted",
                payload:{
                        id:id
                }
        });
}
const resolveBug=id=>{
       
        store.dispatch({
                type:"bugResolved",
                payload:{
                        id:id
                }
        });
}
console.log(store.getState());

