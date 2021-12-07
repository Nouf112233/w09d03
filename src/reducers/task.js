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

      return { name };
    default:
      return state;
  }
};

export default tasks;

export const add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
