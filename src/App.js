import React from "react";
import Account from "./components/Account";
import UserTask from "./components/UserTask";
import AdminTask from "./components/AdminTask";
import { useSelector } from "react-redux";



function App() {

  const state = useSelector((state) => {
    console.log("state", state);
    return state;
  });
 
  return (
    <>
    <p>hello</p>
    </>
   
  );
}

export default App;
