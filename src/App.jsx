import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <NavBar />
        <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;