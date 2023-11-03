import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './NavTabs';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;