// React library
import React from "react";

export default class About extends React.Component {
  render() {
    return (
    <div>
        <div id="about" class="container content-section text-center">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>About Grayscale</h2>
                    <p>Graduated Lake Forest College with a Biology Degree 13'. After all the years in school, I wanted to work. Going into Beautician as a nail technician was to help ease the mind after all the year of doing traditional school: I rather choose physical work for the time of being. Unfortunately, 1yr break equated to 3yrs due to family business struggling for help.</p>
                    <p>Take my chances with <a href="https://codingbootcamp.northwestern.edu/">Northwestern Bootcamp Program</a></p>
                    <p>In this program, I've learn...</p>
                </div>
            </div>
        </div>

        <div id="contact" class="container content-section text-center">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Connect with Me</h2>
                    <p>Feel free to email and provide any feedback, or to just say hello!</p>
                    <p><a href="mailto:nguyett@lakeforest.edu">Email</a>
                    </p>
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/Snack_LinhSnack" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/linhng15" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/linhng15/" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">LinkedIn</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}