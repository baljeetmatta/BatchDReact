import { useEffect, useRef, useState } from "react"
import {io} from "socket.io-client"
const socket=io("http://localhost:3001")
const ChatApp=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
    const inputRoomRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);
    const [room,setRoom]=useState<string>("");

    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Connection established");
            //socket.emit("user-message","Hello")
        })
        socket.on("join-room",(data)=>{
           // setRoom((prev)=>data);
setRoom(data);

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
    const enterRoom=()=>{
        if(inputRoomRef.current)
        {
        socket.emit ("room-join",inputRoomRef.current?.value);
        //setRoom(inpu)
        }
    }
    if(room=="")
    {
        return (
            <>
            <input ref={inputRoomRef} type="text"/>
            <button onClick={enterRoom}>Enter Room</button>
            </>
        )
    }
    return (
        <>
        Chat App - {room}
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