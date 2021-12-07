import React, { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {login} from "./../../reducers/login"
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';

function SignIn() {
    const dispatch=useDispatch();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signin=async()=>{
        let role="";
        const user=await axios.post(`${process.env.REACT_APP_BASIC_URL}/login`, {email:email,password:password})
        console.log("user.data",user.data)
        if(user.data.result.role=="61a611731b5718ea5ec72247")
    
        {
             role="admin"
        }else{role="user";}
        const data={
            role:role,
            token:user.data.token

        }
        dispatch(login(data));
        navigate(`/tasks`);
    }
    return (
        <div>
            <input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)} required/><br/>
            <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}required/><br/>
            <button onClick={signin}>signin</button>
            
        </div>
    )
}

export default SignIn
