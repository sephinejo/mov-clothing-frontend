import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './shared/components/Navigation/Header';
import Footer from './shared/components/Footer/Footer';
import ScrollToTop from './shared/components/ScrollToTop/ScrollToTop';
import React, { Fragment, useState } from 'react';

function App() {
  const [isSubNavigationOpen, setIsSubNavigationOpen] = useState(false);

  return (
    <>
      <Header setIsSubNavigationOpen={setIsSubNavigationOpen} />
      {isSubNavigationOpen ? (
        <div style={{ opacity: '.4' }}>
          <Outlet />
          <Footer />
          <ScrollToTop />
        </div>
      ) : (
        <>
          <Outlet />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
