import React from 'react';
import logo from '../logo.png'; // Tell webpack this JS file uses this image
import { Box } from '@material-ui/core';
console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <Box className ='header'><img src={logo} alt="Logo" /></Box>;
}

export default Header;
