import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserManagementPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', role: 'hr' });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (user.role !== 'admin') return;

    try {
      await axios.post('/api/users', newUser);
      setNewUser({ email: '', role: 'hr' });
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (user.role !== 'admin') return;

    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      {user.role === 'admin' && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="hr">HR</option>
            <option value="cpc">CPC</option>
            <option value="md">MD</option>
            <option value="chairman">Chairman</option>
          </select>
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {user.role}
            {user.id !== user.id && (
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagementPage;
