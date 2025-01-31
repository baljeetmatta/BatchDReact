import './App.css'
import results from "./data.json";

function App() {
  //variable
  // let data:string;
  // data="Demo";
  let data = "Demo";
  //array
  //let arrData=["First","Second",23]
  let arrData: string[] = ["First", "Second", "Third"];
  //object
  //let obj:{name:string,age:number}={name:"First",age:30}
  //inline type
  type objectype = {
    name: string,
    age: number;
  }
  let obj: objectype = { name: "First", age: 20 };

  //array of objects
  let arrObj: objectype[] =results;


  // obj.name="";
  // obj.age=23;

  return (
    <>
      <div >
        Welcome to {data} - {obj.name} {obj.age}
        {
          arrData.map((item) => {
            return <p>{item}</p>
          })
        }

        {
          arrObj.map((item) => {
            return <p>{item.name} - {item.age}</p>
          })
        }
      </div>

    </>

  )
}

export default App
