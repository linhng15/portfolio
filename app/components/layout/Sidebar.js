import React from "react";


export default class Sidebar extends React.Component {
  render() {
    return (
        <div class="row">
          <div class="col-lg-12">
            <h1>Hello!</h1>
            <h3>I am <i>Linh Nguyen</i>.</h3>
            <h4>Junior Web Developer</h4>
          	<p><img src="public/img/profile.JPG" alt="ProfilePix" class="profileImg" /></p>
            <p>I'm currently living in Chicago, IL. </p>
            <p>I love designing and building creative, functional website!</p>
            <p>Feel free to email and provide any feedback, or to just say hello!</p>
            <h4>Connect with Me</h4>
            <p><a href="mailto:nguyett@lakeforest.edu"><img src="public/img/email.png" alt="emailPix" class="email"/></a>
            </p>

            <ul class="list-inline banner-social-buttons">
                <li>
                    <span><a href="https://github.com/linhng15"><img src="public/img/female_coder.png" alt="gitPix" class="github"/></a></span>
                </li>
                <li>
                    <span><a href="https://www.linkedin.com/in/linhng15/"><img src="public/img/BtnLinkedInClear.png" alt="linkedinPix" class="LinkedIn"/></a></span>
                </li>
                <li>
                    <span><a href="https://twitter.com/Snack_LinhSnack"><img src="public/img/twitter_miluska.png" alt="twitterPix" class="twitter"/></a></span>
                </li>
            </ul>
          </div>
        </div>
    );
  }
}


