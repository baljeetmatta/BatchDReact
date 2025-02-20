type ChildProps={
    data:string;
    code:(args:string)=>void;
}
const Child=(props:ChildProps)=>{
    const clickHandler=()=>{
        //props.data="Bye";
        props.code("Bye");
        
    }
    return (
        <>
        <div>Child {props.data}</div>
        <button onClick={clickHandler}>Change</button>
        </>
    )
}
export default Child;