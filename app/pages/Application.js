// React library
import React from "react";

import Development from "../components/Development";

export default class Application extends React.Component {
  render() {
    const Development = [
      "html-css-hw",
      "html-css-bootstrap-three-days",
      "intro-js-hangman-dom",  
      "html-css-hw",
      "html-css-bootstrap-three-days",
      "intro-js-hangman-dom",
      
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
     	 <h1> Application Development </h1>
          <div class="row">{Development}</div>
      </div>
    );
  }
}