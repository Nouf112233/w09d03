import React, { useEffect, useState } from "react";
import axios from "axios";
// import {getTasks,getAllUsers} from "./../../reducers/task";
import {getAllUsers} from "./../../reducers/user";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function AdminTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    // console.log("state.signIn.token", state.signIn.token);
    // console.log("state.tasks", state.tasks);
    return state;
  });

  const out = () => {
    dispatch(logout({ role: "", token: "" }));
    // dispatch(add({name:[]}));
    navigate(`/`);
  };

  const getallusers = async () => {
    try {
      const allUsers = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/users`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      console.log(allUsers.data);
      const data = {
        user:allUsers.data,
      };
      dispatch(getAllUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

//   const getTasksAdmin = async () => {
//     try {
//       const tasks = await axios.get(
//         `${process.env.REACT_APP_BASIC_URL}/alltasks`,
//         { headers: { Authorization: `Bearer ${state.signIn.token}` } }
//       );
//       const data = {
//         name: tasks.data,
//       };
//       dispatch(add(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

useEffect(() => {
    getallusers();
  }, []); 
  return (
    <div>

      <button onClick={out}>LogOut</button>
    </div>
  );
}

export default AdminTask;
