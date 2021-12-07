import React, { useEffect, useState } from "react";
import axios from "axios";
// import {getTasks} from "./../../reducers/task";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function AdminTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const out = () => {
    dispatch(logout({ role: "", token: "" }));
    // dispatch(add({name:[]}));
    navigate(`/`);
  };
  return (
    <div>
      <p>Admin</p>
      <button onClick={out}>LogOut</button>
    </div>
  );
}

export default AdminTask;
