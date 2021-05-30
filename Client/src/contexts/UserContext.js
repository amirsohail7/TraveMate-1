import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    userType: "",
    userID: 0,
    isLoggedIn: false,
  });

  const updateUserType = (userType) => {
    setUser([...userType, { userType }]);
  };

  const updateUserID = (userID) => {
    setUser([...userID, { userID }]);
  };

  const updateIsLoggedIn = (isLoggedIn) => {
    setUser([...isLoggedIn, { isLoggedIn }]);
  };

  return (
    <UserContext.Provider
      value={{
        userID,
        userType,
        isLoggedIn,
        updateUserType,
        updateUserID,
        updateIsLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
