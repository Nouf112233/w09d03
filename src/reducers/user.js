const instialState = {
  userId: "",
  user: [],
};
const users = (state = instialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USERS":
      const { user } = payload;
      return { userId: "", user:user };
    case "GIT_USER_TASKS":
      const { userId } = payload;
      //   console.log("data",{...state.name,task})

      return { ...state, userId };
    default:
      return state;
  }
};

export default users;

export const getAllUsers = (data) => {
  return {
    type: "GET_ALL_USERS",
    payload: data,
  };
};

export const getUserTasks = (data) => {
  return {
    type: "GIT_USER_TASKS",
    payload: data,
  };
};

