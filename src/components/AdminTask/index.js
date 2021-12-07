import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getTasks,
  deleteTask,
} from "./../../reducers/task";
import { getAllUsers, getUserTasks } from "./../../reducers/user";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        user: allUsers.data,
      };
      dispatch(getAllUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getusertask = async (id, i) => {
    try {
      const usertask = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/taskadmin/${id}`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      //   console.log("usertask.data._id",usertask.data);
      const data = {
        userId: id,
      };
      dispatch(getUserTasks(data));
      const data1 = {
        name: usertask.data,
      };
      dispatch(getTasks(data1));
    } catch (error) {
      console.log(error);
    }
  };

  const deletetask = async (taskId,i) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASIC_URL}/taskadmin/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      const data = {
        index: i,
      };
      dispatch(deleteTask(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallusers();
  }, []);
  return (
    <div>
      {state.users.user.length &&
        state.users.user.map((item, i) => {
          return (
            <div key={item._id}>
              <p>{item.email}</p>
              {(state.users.userId.length === 0 ||
                state.users.userId != item._id) && (
                <button onClick={() => getusertask(item._id, i)}>
                  user tasks
                </button>
              )}
              {state.users.userId.length &&
                state.users.userId == item._id &&
                state.tasks.name.map((text, i) => {
                  // console.log("item", item);
                  return (
                    <div key={text._id}>
                      <h1>{text.name}</h1>
                      <button onClick={() => deletetask(text._id, i)}>
                        delete
                      </button>
                    </div>
                  );
                })}
            </div>
          );
        })}

      <button onClick={out}>LogOut</button>
    </div>
  );
}

export default AdminTask;
