import React from 'react';
import Navbar from "./component/Navbar";
import Sidebar from './component/Sidebar';

const App = () => {
  return (
    <div style={{display:"flex"}}>
      <div >
     
      <Sidebar/>
      </div>
      <div>
      <Navbar/>
      </div>
         
          
   

    </div>
  );
};

export default App;