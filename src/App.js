import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export default function App() {
  return (
    //Bem naming convention
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}
