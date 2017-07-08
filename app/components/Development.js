import React from "react";

export default class Development extends React.Component {
  render() {
    //Title = project name 
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p> Build a professional portfolio site using HTML/CSS. These instructions include a short style guide; follow it to design an aesthetically pleasing layout while creating different kinds of complex HTML elements. </p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}