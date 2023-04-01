import React, { PropsWithChildren, useState, useEffect } from "react";

 const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: ():void => {},
  onLogin: (email:string, password: string):void => {}
})

export const AuthContextProvider = (props:PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const isUserLogged = localStorage.getItem("isLoggedIn") === "LOGGED";

    if (isUserLogged) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "LOGGED");
    setIsLoggedIn(true)
  }

  return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext