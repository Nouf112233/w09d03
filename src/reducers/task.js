const instialState = {
  name: [],
};
const tasks = (state = instialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_TASKS":
      const { name } = payload;
      return { name };
    case "UPDATE_TASK":
      const { task } = payload;
      console.log({...name,task})

      return  state;
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
