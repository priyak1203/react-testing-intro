import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button disabled={true}>login</button>
      </form>
    </div>
  );
};

export default Login;
