import React from "react";

function Job(props) {
  function getCities(cities) {
    return cities.map(city => city.name).join(", ");
  }

  const cities = getCities(props.job.cities);

  return (
    <a
      href={props.job.applyUrl}
      className="list-group-item list-group-item-action"
    >
      <h3>{props.job.title}</h3>
      <div>
        <strong>Company:</strong> {props.job.company.name}
      </div>
      <div>
        {cities && (
          <>
            <strong>Cities: </strong>
            {cities}
          </>
        )}
      </div>
    </a>
  );
}

export default Job;
