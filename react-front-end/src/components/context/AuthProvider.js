import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});

    const login = function(id, username, photo, email) {
      const userData = {email:email, id:id, username:username, photo:photo}
      setUser({...user, ...userData });
      setAuth(true);
      localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = function() {
      setAuth(false);
      setUser({});
      localStorage.removeItem('user');
    };
    
    const userData = {auth, user, login, logout};
    
    useEffect(() => {
      if(localStorage.getItem('user')) {

        setUser( JSON.parse(localStorage.getItem('user')) );
        setAuth(true);
      }
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {props.children}
        </AuthContext.Provider>
    )
};