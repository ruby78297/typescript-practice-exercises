import React from "react";

type propsType = {
  personalDetails: {
    fName: string;
    lName: string;
  };
};

const Person = (props: propsType) => {
  return (
    <div>
      My Name is {props.personalDetails.fName} {props.personalDetails.lName}
    </div>
  );
};

export default Person;
