import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import {AuthContext} from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

export default function TopNav() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate(`/user`);
  };

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/login', `username=${username}&password=${password}`).then((res) => {
      login(
        res.data.id,
        res.data.username,
        res.data.user_photo,
        res.data.email
      );
      navigateToUser()
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="floatingInput"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            className="form-control"
          />
          <label for='floatingInput'>Username:</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="form-control"
          />
          <label htmlFor='floatingPassword'>Password:</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </section>
  )
};