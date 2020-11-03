import React, {useState, useEffect} from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";


function SidebarChat({id, name, addNewChat }) {
  const [seed, setSeed] = useState ("");

  useEffect(()=> {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter name for chat room");
    if (roomName){
      // do some database stuff...
      db.collection('rooms').add({
        name: roomName,
      })
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
    <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
     
     <div className="sidebarChat_info">
     <h2> {name} </h2>
     <p>mensaje</p>
     
     </div>

    </div>

  ) : (
    <div onClick={createChat} className="sidebarChat">
     <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat
