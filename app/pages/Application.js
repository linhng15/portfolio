// React library

import React from "react";

import Development from "../components/Development";

export default class Application extends React.Component {
  render() {
    const Project = [
      "html-css-hw",
      "html-css-bootstrap-three-days",
      "intro-js-hangman-dom",  
      "html-css-hw",
      "html-css-bootstrap-three-days",
      "intro-js-hangman-dom",
    ].map((title, i) => <Development key={i} title={title}/> );

    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">

          </div>
        </div>

        <div class="row">{Project}</div>
      </div>
    );
  }
}
