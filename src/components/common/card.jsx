import React from "react";

const Card = ({ head, body }) => {
  return (
    <div className="card shadow mb-5 bg-white rounded">
      <h5 className="card-header">{head}</h5>

      <div className="card-body overflow-auto">{body}</div>
    </div>
  );
};

export default Card;
