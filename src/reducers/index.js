import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import signIn  from "./login";
import tasks from "./task";
import users from "./user";

const reducers=combineReducers({signIn,tasks,users});


const store=()=>{
    return createStore(reducers,composeWithDevTools());
};

export default store();
