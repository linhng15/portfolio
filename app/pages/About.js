// React library
import React from "react";

//public/img/lau.JPG

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="bio">

              <h2>About Linh Nguyen</h2>
              <p>Graduated Lake Forest College with a Biology Degree 13'. After all the years in school, I wanted to work. Going into Beautician as a nail technician was to help ease the mind after all the year of doing traditional school: I rather choose physical work for the time of being. Unfortunately, 1yr break equated to 3yrs due to family business struggling for help.</p>
              <p>Take my chances with <a href="https://codingbootcamp.northwestern.edu/">Northwestern Bootcamp Program</a></p>
              <p>In this program, I've learn...</p>

            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="w3-content w3-display-container">

              <div class="w3-display-container mySlides">
                <img src="#"/>
                <div class="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black">
                  Trolltunga, Norway
                </div>
              </div>

              <div class="w3-display-container mySlides">
                <img src="#"/>
                <div class="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
                  Northern Lights, Norway
                </div>
              </div>

              <div class="w3-display-container mySlides">
                <img src="#"/>
                <div class="w3-display-topleft w3-large w3-container w3-padding-16 w3-black">
                  Beautiful Mountains
                </div>
              </div>

              <div class="w3-display-container mySlides">
                <img src="#"/>
                <div class="w3-display-topright w3-large w3-container w3-padding-16 w3-black">
                  The Rain Forest
                </div>
              </div>

              <div class="w3-display-container mySlides">
                <img src="#"/>
                <div class="w3-display-middle w3-large w3-container w3-padding-16 w3-black">
                  Mountains!
                </div>
              </div>

              <button class="w3-button w3-display-left w3-black" onClick="plusDivs(-1)">&#10094;</button>
              <button class="w3-button w3-display-right w3-black" onClick="plusDivs(1)">&#10095;</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}