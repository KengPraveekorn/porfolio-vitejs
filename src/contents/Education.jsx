import React from "react";
import Widecard from "../components/Widecard";

const Education = () => {
  return (
    <div className="condiv education">
      <h1 className="subtopic">My Education</h1>
      <Widecard
        title="Faculty Computer Engineering"
        where="NU University"
        from="2017"
        to="2021"
      />
      <Widecard
        title="Scientists-Mathematics"
        where="Montfort College High School"
        from="2014"
        to="2016"
      />
    </div>
  );
};

export default Education;
