import React from 'react';
import '../styles/Layout.css';
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* Your header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
