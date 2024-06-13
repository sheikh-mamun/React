import React from 'react';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex'}}>
      <div style={{ width: '100%'}} ><Navbar/></div>
      <div><Sidebar/></div>
      
      
    </div>
  );
};

export default App;