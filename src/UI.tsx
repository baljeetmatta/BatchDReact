import { ChangeEvent, useState } from "react";

const UI=()=>{
//let textData="";
const [textData,setText]=useState("");

    const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
            // let target=e.target as HTMLInputElement;
             //textData=e.target.value;
             setText(e.target.value);

    }
    const printHandler=()=>{
        alert(textData);

    }
    const updateHandler=()=>{
        //textData="Bye";
        setText("Bye");
        

    }
    return (
        <>
        <div>
            <input type="text" value={textData} onChange={changeHandler}/>
            <button onClick={printHandler}>Print</button>
            <button onClick={updateHandler}>Change</button>
        </div>
        </>
    )
}
export default UI;