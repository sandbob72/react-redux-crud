import React from "react";
import { connect } from 'react-redux'
import { deleteUsers } from '../actions'

const UserTable = ({ userData, editRow, dispatch }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length > 0 ? (
          userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => editRow(user)}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUsers(user.id))}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  userData: state.UserName
})

const AppWithConnect = connect(mapStateToProps)(UserTable)

export default AppWithConnect;
