import React from 'react'
import shortid from 'shortid';

const UserTable = (props) => {
  const { users, deleteUser, setEditing, editRow } = props;


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.length > 0 ? (
          users.map((user) => (
            <tr
              key={shortid.generate()}
            >
              <td>{user.name}</td>
              <td>{user.user}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => editRow(user)}
                >Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >Delete
                </button>
              </td>
            </tr>
          ))
          )
            :
          (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default UserTable;
