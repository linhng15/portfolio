import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const aboutClass = location.pathname === "/" ? "active" : "";
    const applicationClass = location.pathname.match(/^\/application/) ? "active" : "";
    const resumeClass = location.pathname.match(/^\/resume/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="nav">
            <ul class="nav navbar-nav">
              <li class={aboutClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>About</IndexLink>
              </li>
              <li class={applicationClass}>
                <Link to="application" onClick={this.toggleCollapse.bind(this)}>Application</Link>
              </li>
              <li class={resumeClass}>
                <Link to="resume" onClick={this.toggleCollapse.bind(this)}>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}