import React from "react";

const Person = props => {
  return (
    <div>
      Hi I'm {props.name} and I like {props.whatILike}
    </div>
  );
};

export default Person;
