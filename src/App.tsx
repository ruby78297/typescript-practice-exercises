import React from "react";
import { Greet } from "./Greet";
import Person from "./person";
const personalDetails = {
  fName: "Ruby",
  lName: "Rana",
};

function App() {
  return (
    <>
      <Greet name="ruby" />;
      <Person personalDetails={personalDetails} />
    </>
  );
}

export default App;
