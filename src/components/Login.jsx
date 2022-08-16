import React, { useState } from 'react';

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={true}>login</button>
        <span
          data-testid="error"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
