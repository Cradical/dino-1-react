import React from "react";

const JobsComponent = ({ jobsInfo }) => {
  return (
    <React.Fragment>
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {jobsInfo.map(element => {
            return (
              <li>
                <h1>{element.title}</h1>
                <small>{element.pay}</small>
                <p>{element.description}</p>
                <small>
                  {element.interested.length +
                    " dinos are interested in this job"}
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default JobsComponent;
