import React, { useState } from "react";
import useInput from "../hooks/useInput";

const Formdemo = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput({
    initialValue: "",
  });
  const [lastName, bindLastName, reseLastName] = useInput({
    initialValue: "",
  });

  console.log("firstName ", firstName);
  console.log("bindFirstName ", bindFirstName);
  console.log("resetFirstName ", resetFirstName);

  const submitHandler = (e: any) => {
    e.preventDefault(); // prevents from refreshing the page
    console.log(e);
    // alert(`Hello ${firstName} ${lastName}`);
    console.log(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    reseLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label> First Name </label>
          <input
            type="text"
            {...bindFirstName}
            // value={firstName}
            // onChange={(event) => {
            //   setFirstName(event.target.value);
            // }}
          />
        </div>

        <div>
          <label> Last Name </label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Formdemo;
