// function Greet()
// {
//     return (
//         <>
//         <div>Welcome to Gree</div>
//         </>
//     )
// };
// export default Greet;

// const Greet=()=>{
//     return (
//         <>Greet Component</>
//     )
// }
// export default Greet;
// const Greet:React.FC=()=>{
//     return (
//         <>
//         Greet</>
//     )
// }
// export default Greet;
// import React from 'react';

// interface Props {
  
// }

// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

//export default Component;
type ObjectType={
    name:string,age:number;
}
type GreetProps={
    name?:string,
    years?:number;
    //data?:{name:string,age:number}[];
data?:ObjectType[];

}
const Greet=(props:GreetProps)=>{
    return (
        <>
        <div>Welcome to {props.name}</div></>
    )
}
export default Greet;

