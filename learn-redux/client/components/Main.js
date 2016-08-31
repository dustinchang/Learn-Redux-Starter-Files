import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Main = React.createClass({
  render() {
    return (
      <div>
          <MuiThemeProvider>
              <AppBar title="My AppBarTitle!"/>
          </MuiThemeProvider>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
