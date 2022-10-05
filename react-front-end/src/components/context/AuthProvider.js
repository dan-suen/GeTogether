import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});

    const login = function(id, username, photo, email) {
      setUser({...user, email:email, id:id, username:username, photo:photo });
      setAuth(true);
    };

    const logout = function() {
      setAuth(false);
      setUser({});
    };
    
    const userData = {auth, user, login, logout};
    
    useEffect(() => {
      if(localStorage.getItem('user')) {

        setUser( JSON.parse(localStorage.getItem('user')) );
        setAuth(true);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={userData}>
            {props.children}
        </AuthContext.Provider>
    )
};