import React from 'react';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
