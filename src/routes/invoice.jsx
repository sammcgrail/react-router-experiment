import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>
        {invoice.name}: {invoice.amount}
      </h2>
      <p>Version: {invoice.number}</p>
      <p>Last updated: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            navigate('/diagnostics');
          }}
        >
          Check diagnostics
        </button>
      </p>
    </main>
  );
}
