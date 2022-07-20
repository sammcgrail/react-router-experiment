import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>NXL-S React Router Navigation Example</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/splash">Splash</Link> |{' '}
        <Link to="/status">System Status</Link> |{' '}
        <Link to="/patients">Patient List</Link> |{' '}
        <Link to="/diagnostics">Diagnostics</Link> |{' '}
        <Link to="/newtreatment">New Treatment Plan</Link>
      </nav>
      <Outlet />
    </div>
  );
}
