// React library

import React from "react";

export default class Application extends React.Component {
  render() {
   
    return (
      <div>
        <div class="col-md-4">
          <h4>Shuttle Extravaganza</h4>
          <p>MEAN </p>
          <a class="btn btn-default" href="#">More Info</a>
        </div>

        <div class="col-md-4">
          <h4>Mini Library Book Tracker (MLBT)</h4>
          <p>Full-stack library application that efficiently tracks the books at the Northwestern University department of Material Science and Engineering. Facilitates access for students and faculty. </p>
          <a class="btn btn-default" href="#">More Info</a>
        </div>


        <div class="col-md-4">
          <h4>Bodyshop Profit & Loss</h4>
          <p>Developement of a profit and loss sheet for the collision repair industry.</p>
          <a class="btn btn-default" href="#">More Info</a>
        </div>
      </div>
    );
  }
}
