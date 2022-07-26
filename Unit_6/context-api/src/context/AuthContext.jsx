import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider ({ children }) {
    const [isAuth, setIsAuth] = React.useState(false);
    const [tokenNumber, setTokenNumber] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const callApi = async () => {
        try {
            setLoading(true);
            let user = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
            let response = await fetch(`https://reqres.in/api/login`,{
                method: 'POST',
                body: JSON.stringify(user),
                headers : { "Content-Type" : "application/json" }
            });
            let result = await response.json();
            setIsAuth(true);
            setTokenNumber(result.token);
            // console.log(result.token)
            setLoading(false);
            // return result.token;
        } catch (error) {
            console.log(error)
        }
    }

    const toggleIsAuth = () => {
        setIsAuth(!isAuth);
        setTokenNumber();
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{isAuth, loading, tokenNumber, callApi, toggleIsAuth}} >
            {children}
        </AuthContext.Provider>
    )
}