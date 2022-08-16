import React, { useState } from 'react';

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
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
