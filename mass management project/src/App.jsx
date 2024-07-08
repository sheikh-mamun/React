
import React from 'react';

import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SecondPage from './pages/SecondPage';

import Adduser from './pages/users/Adduser';
import Manageuser from './pages/users/Manageuser';
import Edituser from './pages/users/Edituser';
import AddCategory from './pages/category/AddCategory';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePortal from './portal/Pages/Home';



const App = () => {
  return (
     <BrowserRouter>     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/add-user" element={<Adduser/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
        <Route path="/manage-user" element={<Manageuser/>}/>
        <Route path="/edit-user" element={<Edituser/>}/>
        <Route path="/blog" element={<Blog/>}>
           <Route path="second" element={<SecondPage/>}/>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomePortal/>} />
      </Routes>
    </BrowserRouter>

  
  );
};

export default App;