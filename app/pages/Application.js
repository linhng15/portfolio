// React library

import React from "react";

export default class Application extends React.Component {
  render() {
   
    return (
      <div>
        <h2> Portfolio </h2>
        <hr/>
        <hr/>
        <div class="col-md-4">
          <h4>Shuttle Extravaganza</h4>
          <p>Shuttle Extravaganza is a fun, cool apps for everyone in Chicago to find events to attend. Users can saved the events and find other adventure goer who also would like to share a ride. </p>
          <p>Technologies: React, API, MongoDB, HTML, Bootstrap, JavaScript, jQuery, Pencil</p>
          <center><a href="https://agile-chamber-59717.herokuapp.com/">View it Live</a></center>
          <center><a href="https://github.com/linhng15/Extravaganza">Code Source</a></center>
        </div>

        <div class="col-md-4">
          <h4>Mini Library Book Tracker (MLBT)</h4>
          <p>MLBT is an application that efficiently tracks the books at the Northwestern University department of Material Science and Engineering. Facilitates access for students and faculty. </p>
          <p>Technologies: HTML, Express-Handlebars, CSS, Bootstrap, JavaScript, jQuery, MySQL, Pencil</p>
          <center><a href="https://github.com/linhng15/mlbt">Code Source</a></center>
        </div>


        <div class="col-md-4">
          <h4>Bodyshop Profit & Loss</h4>
          <p>Developement of a profit and loss sheet for the collision repair industry.</p>
          <p>Technologies: HTML, CSS, Bootstrap, JavaScript, jQuery, Firebase, Pencil</p>
          <center><a href="https://github.com/linhng15/Body-Shop-Profits-Loss">Code Source</a></center>
        </div>
      </div>
    );
  }
}
