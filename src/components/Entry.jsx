import React from "react";

function entry(prop) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {prop.img}
        </span>
        <span>{prop.tit}</span>
      </dt>
      <dd>{prop.det}</dd>
    </div>
  );
}

export default entry;
