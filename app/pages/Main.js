// React library

import React from "react";
import { Link } from "react-router";

//static components
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Sidebar from "../components/layout/Sidebar";


export default class Main extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-4">

              <Sidebar/>

            </div>

            <div id="malleableContainer" class="col-lg-8">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}