import React from "react";
import "./card.css"

function Card({ icon, title, children }) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3 className="text-primary">
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
