import React from "react";
import app from "../Auth/base";

const Homel = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Homel;
