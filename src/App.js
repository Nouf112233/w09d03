import React from "react";
import { Routes, Route} from "react-router-dom";
import Account from "./components/Account";
import UserTask from "./components/UserTask";
import AdminTask from "./components/AdminTask";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import SignIn from "./components/SignIn";



function App() {

  const state = useSelector((state) => {
    console.log("state", state);
    return state;
  });

 
  return (
    <>
    {!state.signIn.token && <Account />}
    {(state.signIn.token && state.signIn.role==="user") && <UserTask /> }
    {(state.signIn.token && state.signIn.role==="admin") && <AdminTask /> }
   
    <Routes>
        {/* <Route exact path="/tasks" element={<Tasks />} /> */}
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </>
   
  );
}

export default App;
