import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export default function TopNav() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  return (
    <form>
      <div class="form-floating mb-3">
        <input 
        type="text" 
        id="floatingInput" 
        placeholder="Username" 
        autoComplete='off' 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
        required 
        class="form-control"
        
        />
        <label for='floatingInput'>Username:</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required class="form-control" />
        <label htmlFor='floatingPassword'>Password:</label>
      </div>
      <button class="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  )
};