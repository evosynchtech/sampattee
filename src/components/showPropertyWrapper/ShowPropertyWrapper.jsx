import React from "react";
import data from "../../data/Data";
import ShowProperty from "../../pages/ShowProperty";
import { useParams } from "react-router-dom";

function ShowPropertyWrapper({ place }) {
  let id = useParams().id;

  const propertyData = data[place].filter((property) => property.id == id);
  console.log(id, "\n", propertyData);

  if (propertyData.length == 0) {
    return <ErrorPage />;
  }

  return (
    <div>
      <ShowProperty data={propertyData[0]} />
    </div>
  );
}

export default ShowPropertyWrapper;
