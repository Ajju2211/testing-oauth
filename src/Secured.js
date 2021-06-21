import React from "react";
import { UserContext } from "./UserContext";
import Login from "./Login";
const Secured = (props) => {
  return (
    <UserContext.Consumer>
      {(ctx) => {
        return (
          <>
            <h1>Secured</h1>
            <Login />
            <h1>{ctx.name}</h1>
          </>
        );
      }}
    </UserContext.Consumer>
  );
};
export default Secured;
