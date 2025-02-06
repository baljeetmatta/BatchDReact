import './App.css'
import Button from './Button';
import Greet from './Greet'
import results from "./data.json";
const clickHandler=(e:React.MouseEvent)=>{
  let target=e.target as HTMLButtonElement;

  alert(target.innerText+ " Button Clicked");

}
const clickHandlerClick=(e:React.MouseEvent)=>{
  let target=e.target as HTMLButtonElement;

  alert(target.innerText+ " Button Clicked");

}

function App(){
  let data=10;
  return (
    <>
    <div>App Component</div>
    <Greet name="Code" years={data} data={results}/>
    <Greet name="Quotient"/>
    <Button value="Send" click={clickHandler} />
    <Button value="Click" click={clickHandlerClick}/> 

    </>
  )
}
export default App;
//import results from "./data.json";

// function App() {
//   //variable
//   // let data:string;
//   // data="Demo";
//   let data = "Demo";
//   //array
//   //let arrData=["First","Second",23]
//   let arrData: string[] = ["First", "Second", "Third"];
//   //object
//   //let obj:{name:string,age:number}={name:"First",age:30}
//   //inline type
//   type objectype = {
//     name: string,
//     age: number;
//   }
//   let obj: objectype = { name: "First", age: 20 };

//   //array of objects
//   let arrObj: objectype[] =results;


//   // obj.name="";
//   // obj.age=23;

//   return (
//     <>
//       <div >
//         Welcome to {data} - {obj.name} {obj.age}
//         {
//           arrData.map((item) => {
//             return <p>{item}</p>
//           })
//         }

//         {
//           arrObj.map((item) => {
//             return <p>{item.name} - {item.age}</p>
//           })
//         }
//       </div>

//     </>

//   )
// }

//export default App
