export default (
  state = [{ id: 1, name: "sakul", username: "sandbob72" }],
  action
) => {
  switch (action.type) {
    case "GETUSER":
      return state;
    case "ADDUSER":
      return [...state, action.newUser];
    case "DELETEUSERS":
      return state.filter((user) => user.id !== action.idUser);
    case "EDITUSER":
      return state.map((user) => (user.id === action.idUser ? action.updatedUser : user));
    default:
      return state;
  }
};
