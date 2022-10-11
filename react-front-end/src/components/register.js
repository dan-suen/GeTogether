import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "./context/AuthProvider";
import { useNavigate } from 'react-router-dom';
import './register.scss';

export default function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      axios.post('/register', `username=${username}&password=${password}&firstname=${firstName}&lastname=${lastName}&email=${email}`).then((res) => {
        login(
          res.data.id,
          res.data.username,
          res.data.user_photo,
          res.data.email
        );
        navigateToHome();
      });
    }
  };
  return (
    <form class="row g-3" onSubmit={handleSubmit}>
      <h1>Register today!</h1>
      <div className="mb-3 mt-3 row">
        <label for="registerFirstName" className="col-sm-2 col-form-label">
          Firstname:
        </label>
        <div class="col-sm-4">
          <input
            type="text"
            autoComplete="off"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            class="form-control"
            id="registerFirstName"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerLastName" className="col-sm-2 col-form-label">
          Lastname:
        </label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            id="registerLastName"
            autoComplete="off"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerUsername" className="col-sm-2 col-form-label">
          Username:
        </label>
        <div class="col-sm-4">
          <input
            type="type"
            class="form-control"
            autoComplete="off"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="registerUsername"

          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="registerEmail" className="col-sm-2 col-form-label">
          Email:
        </label>
        <div class="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="registerEmail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
        <div class="col-sm-4">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPasswordConfirm" class="col-sm-2 col-form-label">Confirm Password: </label>
        <div class="col-sm-4">
          <input
            type="password"
            class="form-control"
            id="inputPasswordConfirm"
            required
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-1 offset-sm-5 register-submit">
          <button type="submit" className="btn btn-primary mb-3">Register!</button>
        </div>
      </div>
    </form>
  );
};