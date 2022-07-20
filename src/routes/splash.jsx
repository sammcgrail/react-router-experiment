import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Splash() {
  let navigate = useNavigate();
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Splash</h2>
    </main>
  );
}
