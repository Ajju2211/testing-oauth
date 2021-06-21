import React from "react";
import { Route } from "react-router-dom";
import { UserContext } from "./UserContext";
const Protected = ({ component: Component, ...rest }) => {
  const [user, setUser] = React.useState({});
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <UserContext.Provider value={user}>
            <Component {...rest} {...props} />
          </UserContext.Provider>
        );
      }}
    />
  );
};
export default Protected;
