const instialState = {
  name: [],
};
const tasks = (state = instialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_TASKS":
      const { name } = payload;
      return { name };
    case "ADD_TASK":
      const { task } = payload;
      //   console.log("data",{...state.name,task})

      return { ...state.name, task };
    case "DELETE_TASK":
      const { index } = payload;
      const newName = state.name.filter((item, i) => {
        return i != index;
      });

      return { name: newName };
    case "UPDATE_TASK":
      const { newTask,indx } = payload;
      console.log("newTask",newTask.data);
      const newname = state.name.map((item, i) => {
          if(i===indx){
              
              return newTask;
          }else{
            return item;
          }
       
      });
      return { name: newname };

     
    default:
      return state;
  }
};

export default tasks;

export const getTasks = (data) => {
  return {
    type: "GET_ALL_TASKS",
    payload: data,
  };
};

export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: data,
  };
};

export const deleteTask = (data) => {
  return {
    type: "DELETE_TASK",
    payload: data,
  };
};

export const updateTask = (data) => {
    return {
      type: "UPDATE_TASK",
      payload: data,
    };
  };
