import { useEffect, useRef, useState } from "react"
import {io} from "socket.io-client"
const socket=io("http://localhost:3001")
const ChatApp=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);

    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Connection established");
            //socket.emit("user-message","Hello")
        })
        //Message from Server
        socket.on("msg",(data)=>{
            //messages.push(data);
            // const emessages=[...messages];
            // emessages.push(data);
            // setMessages(emessages);
            setMessages((prevState)=>[...prevState,data]);
            

            //console.log("Message :"+data);
            //socket.emit("user-message","Hello")
        })
    },[])
    const sendHandler=()=>{
        socket.emit("user-message",inputRef.current?.value);

    }
    return (
        <>
        Chat App
        <input ref={inputRef} type="text" className="border"/>
        <button onClick={sendHandler}>Send</button>
        <div>
        {
            messages.map((item,index)=>{
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default ChatApp;