import {Avatar, IconButton} from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";
import React, {useState, useEffect} from "react";

function Chat(){

   const [seed, setSeed] = useState ("");
   const [input, setInput] = useState ("");

   useEffect(()=> {
    setSeed(Math.floor(Math.random() * 5000));
   }, []);

   const sendMeassage= (e) => {
     e.preventDefault();
     console.log("You type>>>", input);
   }

  return(
    <div className="chat">

     <div className="header_chat">
     
      <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
     
      <div className="headerInfo_chat">
       <h3>Room Name</h3>
       <p>last seen</p>
      </div>

      <div className="headerRight_chat">
       <IconButton> <SearchOutlined /> </IconButton>

       <IconButton> <AttachFile /> </IconButton>

       <IconButton> <MoreVert /> </IconButton>
      </div>

     </div>
     
     <div className="body_chat">
      <p className={`chat_message ${true && "chat_reciever"}`}> {/* String interpolation */}
         <span className="chat_name">Ayleen</span>
         Hey people
         <span className="chat_timestamp">3:00 pm</span>
      </p>
      
     </div>
     
     <div className="footer_chat">
       <InsertEmoticonIcon/>
       <form>
         <input value={input} onChange= {(e) => setInput(e.target.value)} placeholder= "Type a message" type="text"/>
         <button onClick={sendMeassage}type="submit">send a message</button>
       </form>
       <MicIcon/>
     </div>

    </div>
  )
}
export default Chat