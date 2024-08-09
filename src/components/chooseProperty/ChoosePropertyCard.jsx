import React from "react";

function ChoosePropertyCard({ImgUrl, title, description}) {
  return (
    <div className="col px-6">
      <div className="card">
        <img
          src={ImgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title font-bold">{title}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChoosePropertyCard;
