import React from "react";

function Results() {
  return (
    <div>
      <div className="box collapse rating">
        <div className="toggle-header">
          Overall Rating:<i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="collapse-content">${rating}</div>
      </div>
      <div className="box collapse strengths">
        <div className="toggle-header">
          Strengths:
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="collapse-content">${strengths}</div>
      </div>
      <div className="box collapse weaknesses">
        <div className="toggle-header">
          Weaknesses:<i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="collapse-content">${weaknesses}</div>
      </div>
      <div className="box collapse suggestions">
        <div className="toggle-header">
          Suggestions for Improvement:<i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="collapse-content">${suggestions}</div>
      </div>
    </div>
  );
}

export default Results;
