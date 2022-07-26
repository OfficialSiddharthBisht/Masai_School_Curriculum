import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // code here
  const [isAuth, setIsAuth] = React.useState(false);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  }

  return <AuthContext.Provider value={{isAuth, handleAuth}}>{children}</AuthContext.Provider>;
};
