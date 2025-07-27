// UserList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://loginserver-d9uf.onrender.com/api/get_users/")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📄 Stored User Data:</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>👤 Name: {user.name}</p>
          <p>📧 Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
