import React, { useState } from "react";
import { connect } from 'react-redux'
import { addUsers } from '../actions'

const AddUserFrom = ({ userData, dispatch }) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const addUser = (User) => {
    User.id = userData.length + 1;
    dispatch(addUsers(User))
  };
  
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return

        addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};


const mapStateToProps = state => ({
  userData: state.UserName
})

const AppWithConnect = connect(mapStateToProps)(AddUserFrom)

export default AppWithConnect

