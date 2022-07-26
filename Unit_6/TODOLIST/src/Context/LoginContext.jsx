import React from "react";

export const LoginContext = React.createContext();

export function LoginContextProvider ({ children }) {
    const [isAuth, setIsAuth] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const login = async(payload) => {
        setIsAuth(false);
        setUser(null);
        try {
            let response = await fetch(`http://localhost:3001/UserData`);
            let res = await response.json();
            let loggedUser = res.find(item => ((item.UserEmail === payload.UserEmail) && (item.UserPassword === payload.UserPassword)));
            if(loggedUser){
                setIsAuth(true);
                setUser(loggedUser);
            }
            return loggedUser;
            
        } catch (error) {
            console.log(error);
        }

    }

    const maintainUserData = async(id) => {
        try {
            let response = await fetch(`http://localhost:3001/UserData/${id}`);
            let res = await response.json();
            setUser(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoginContext.Provider value={{ isAuth, user, login, setIsAuth, setUser, maintainUserData }}>
            {children}
        </LoginContext.Provider>
    )

}