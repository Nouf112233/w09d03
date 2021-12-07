import React, { useEffect, useState } from "react";
import axios from "axios";
import { getTasks,addTask,deleteTask,updateTask } from "./../../reducers/task";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UserTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taskName, setTaskname] = useState("");
  const [taskadd, setTaskadd] = useState("");

  const state = useSelector((state) => {
    // console.log("state.signIn.token", state.signIn.token);
    // console.log("state.tasks", state.tasks);
    return state;
  });

  const gettasks = async () => {
    try {
      const Taskss = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/tasks`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    //   console.log("tasks", Taskss.data);

        const data = {
          name: Taskss.data,
        };
        dispatch(getTasks(data));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async() => {
    console.log("taskadd", taskadd);
    if (taskadd.length > 0) {
        const newTask = await axios.post(
        `${process.env.REACT_APP_BASIC_URL}/create`,
        { name: taskadd },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      const data = {
        task: newTask.data,
      };
      dispatch(addTask(data));
    }
    
    // getTasks();
    setTaskadd("");
    
  };

  const deletetask = async (taskId, i) => {

    try {
        await axios.delete(`${process.env.REACT_APP_BASIC_URL}/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        });
   
        const data = {
            index: i,
          };
          dispatch(deleteTask(data));
      } catch (error) {
        console.log(error);
      }
  };

  const updatetask = async(_id, i) => {
    if (taskName.length > 0) {
      const newTask=await axios.put(
        `${process.env.REACT_APP_BASIC_URL}/task`,
        { taskId: _id, taskName: taskName },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      const data = {
        newTask:newTask,
        indx:i
      };
      dispatch(updateTask(data));
    }
   
    setTaskname("");

  };

  const out = () => {
    dispatch(logout({ role: "", token: "" }));
    // dispatch(add({name:[]}));
    navigate(`/`);
  };

  useEffect(() => {
    gettasks();
  }, []); 

  return (
    <div>
      <input
        type="text"
        value={taskadd}
        onChange={(e) => {
          setTaskadd(e.target.value);
        }}
      />
      <button  onClick={createTask}>add task</button>

      {state.tasks.name.map((item, i) => {
        // console.log("item", item);
        return (
          <div key={item._id}>
            <h1>{item.name}</h1>
            <button onClick={() => deletetask(item._id, i)}>delete</button>
            <input
              type="text"
              //   value={taskName}
              onChange={(e) => {
                setTaskname(e.target.value);
              }}
            />
            <button onClick={() => updatetask(item._id, i)} >update</button>
          </div>
        );
      })}
      <button onClick={out}>LogOut</button>
    </div>
  );
}

export default UserTask;
