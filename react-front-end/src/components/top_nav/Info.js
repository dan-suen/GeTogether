import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export default function Info() {
  const { user, logout } = useContext(AuthContext);
  return (
    <section>
      <span>
        You are logged in as: {user.username} |  
      </span>
      <button type="button" onClick={logout} className="btn btn-primary">Logout</button>
    </section>
  );
};