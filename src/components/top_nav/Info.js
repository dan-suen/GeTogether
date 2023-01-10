import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Info() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate(`/user`);
  };
  const navigateHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
  return (
    <section>
      <span onClick = {navigateToUser} >
        You are logged in as: <b>{user.username}</b> |  
      </span>
      <button type="button" onClick={()=>{
        logout()
        navigateHome()
      }} className="btn btn-primary" >Logout</button>
    </section>
  );
};