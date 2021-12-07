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

      return  {...state.name,task};
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
