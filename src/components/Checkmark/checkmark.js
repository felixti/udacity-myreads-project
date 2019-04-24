import React from "react";
import "./checkmark.style.css";

const Checkmark = props => (
  <div>
    <span className="checkmark">
      <div className="checkmark_stem" />
      <div className="checkmark_kick" />
    </span>
  </div>
);

export default Checkmark;
