import React, { useState } from "react";

export const EditData = () => {
  //edit component

  const [state, setState] = useState("hh");
  const [boolean, setBoolean] = useState(false);

  console.log(state);

  //create boolean for if double click we have input with state, then after input with state we then have jsx element with newly set state, latest state is always updated in database with linked id top database
  function changeInputValue(e) {
    setState(e.target.value);
  }

  const inputValue = (
    <input
      onClick={() => {setBoolean(!boolean)}}
      autoFocus
      onChange={(e) => {
        changeInputValue(e);
      }}
      value={state}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setBoolean(!boolean);
        }
      }}
    />
  );

  const currentValue = <div  onClick={() => {setBoolean(!boolean)}}>{state}</div>;

  return (
    <div>
      {boolean ? inputValue : currentValue}{" "}
      <button
        onClick={() => {
          setBoolean(!boolean);
        }}
      >
        Edit
      </button>
    </div>
  );
};
