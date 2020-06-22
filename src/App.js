import React, { useState } from 'react';
import UserTable from './components/UserTable'
import shortid from 'shortid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm'

function App() {

  const usersData = [
    { id: shortid.generate(), name: 'Tania', username: 'floppydiskette' },
    { id: shortid.generate(), name: 'Craig', username: 'siliconeidolon' },
    { id: shortid.generate(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const addUSer = (user) => {
    user.id = shortid.generate();
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  }

  return (
    <div className="container">
      <h1>Crud App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ?
              (
                <div>
                  <h2>Edit User</h2>
                  <EditUserForm
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              )
              :
              (
                <div>
                  <h2>Add User</h2>
                  <AddUserForm
                    addUSer={addUSer}
                  />
                </div>
              )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
