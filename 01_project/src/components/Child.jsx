import React from "react";

const Child = ({ user }) => {
    console.log("Child rendering");

  return (
    <div>
      <p>User Name : {user.name}</p>

   

    </div>
  );
};

export default React.memo(Child);
