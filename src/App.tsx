import { Outlet, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import { LoginContext } from "./components/LoginContext";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./PrivateRoute";
import Bugs from "./components/Bugs";

function App()
{
  const [name,setName]=useState<string|undefined>();


  return (

    <>
  Username :{name}
    <LoginContext.Provider value={{name,setName}}>
    <ul className="flex gap-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/bugs">Bugs</NavLink></li>

    </ul>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bugs" element={<Bugs/>}/>
      <Route path="/login" element={<LoginScreen/>}>

      </Route>
      <Route path="/" element={<PrivateRoute><Outlet/></PrivateRoute>}>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>

     
      </Route>

    </Routes>
    </LoginContext.Provider>
    </>
  )
}
export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Jobs, { fetchData } from "./components/Jobs";
// import JobDetails, { fetchJobDetails } from "./components/JobDetails";

// const routes=createBrowserRouter([
//   //Route -> Object  path, element
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/jobs",
//     element:<Jobs/>,
//     loader:fetchData //function reference , which is called before rendering
//   }
//   ,
//   {
//     path:"/jobdetails/:id",
//     element:<JobDetails/>,
//     loader:fetchJobDetails //function reference , which is called before rendering
//   }


// ])
// function App()
// {
//   return (
//     <>
//     <div>App Component</div>
//     <div>
//       <RouterProvider router={routes}/>

//     </div>
    
    
//     </>
//   )
// }
// export default App;
// // import { Route, Routes } from "react-router-dom";
// // import Controls from "./Controls";
// // import Home from "./components/Home";
// // import Contact from "./components/Contact";
// // import About from "./components/About";
// // import Navbar from "./components/Navbar";
// // import MasterLayout from "./components/MasterLayout";

// // function App()
// // {
// //   return (
// //     <>
// //     <div>Basic App Code</div>
// //     <Navbar/>


// //     <Routes>
// //       <Route path="/" element={<Home/>}/>
// //       <Route path="/about" element={<About/>}/>
// //       <Route path="/contact/:city" element={<Contact/>}/>
// //       <Route path="/co" element={<Controls/>}/>
// //       <Route path="/products/" element={<MasterLayout/>}>
// //         <Route path="cloth" element={<div>Cloth</div>}/>
// //         <Route path="elect" element={<div>Elect</div>}/>
// //       </Route>



// //     </Routes>
// //     {/* <Routes>
// //       <Route path="/" element={<div>Home Page</div>}/>
// //       <Route path="/controls" element={<Controls/>}/>

// //     </Routes> */}
    
// //     </>
// //   )
// // }
// // export default App;

// // // //import './App.css'
// // // import Banner from './Banner';
// // // import Button from './Button';
// // // import CTimer from './CTimer';
// // // import Controls from './Controls';
// // // import Greet from './Greet'
// // // import GreetClass from './GreetClass';
// // // import Greeting from './Greeting';
// // // import Login from './Login';
// // // import Parent from './Parent';
// // // import State from './State';
// // // import Timer from './Timer';
// // // import UI from './UI';
// // // import UserDashboard from './components/UserDashboard';
// // // import results from "./data.json";
// // // // const clickHandler=(e:React.MouseEvent)=>{
// // // //   let target=e.target as HTMLButtonElement;

// // // //   alert(target.innerText+ " Button Clicked");

// // // // }
// // // // const clickHandlerClick=(e:React.MouseEvent)=>{
// // // //   let target=e.target as HTMLButtonElement;

// // // //   alert(target.innerText+ " Button Clicked");

// // // // }

// // // // function App(){
// // // //   let data=10;
// // // //   return (
// // // //     <>
// // // //     <div>App Component</div>
// // // //     <Greet name="Code" years={data} data={results}/>
// // // //     <Greet name="Quotient"/>
// // // //     <Button value="Send" click={clickHandler} />
// // // //     <Button value="Click" click={clickHandlerClick}/> 

// // // //     </>
// // // //   )
// // // // }
// // // // function App()
// // // // {
// // // //   return (
// // // //     <>
// // // //     <Controls/>
    
// // // //     </>
// // // //   )
// // // // }

// // // function App()
// // // {
// // //   return  (
// // //     <>
// // //     {/* <Greeting name="Code"/> */}
// // //     {/* <GreetClass name="Code"/> */}
// // //     {/* <Login/> */}
// // //     {/* <Banner/> */}
// // //     {/* <UI/> */}
// // //      {/* <State name="Code"/>  */}
// // //      {/* <CTimer/> */}
// // //     {/* <Parent/> */}
// // //     <UserDashboard/>
// // //     </>
// // //   )
// // // }
// // // export default App;
// // // //import results from "./data.json";

// // // // function App() {
// // // //   //variable
// // // //   // let data:string;
// // // //   // data="Demo";
// // // //   let data = "Demo";
// // // //   //array
// // // //   //let arrData=["First","Second",23]
// // // //   let arrData: string[] = ["First", "Second", "Third"];
// // // //   //object
// // // //   //let obj:{name:string,age:number}={name:"First",age:30}
// // // //   //inline type
// // // //   type objectype = {
// // // //     name: string,
// // // //     age: number;
// // // //   }
// // // //   let obj: objectype = { name: "First", age: 20 };

// // // //   //array of objects
// // // //   let arrObj: objectype[] =results;


// // // //   // obj.name="";
// // // //   // obj.age=23;

// // // //   return (
// // // //     <>
// // // //       <div >
// // // //         Welcome to {data} - {obj.name} {obj.age}
// // // //         {
// // // //           arrData.map((item) => {
// // // //             return <p>{item}</p>
// // // //           })
// // // //         }

// // // //         {
// // // //           arrObj.map((item) => {
// // // //             return <p>{item.name} - {item.age}</p>
// // // //           })
// // // //         }
// // // //       </div>

// // // //     </>

// // // //   )
// // // // }

// // // //export default App
