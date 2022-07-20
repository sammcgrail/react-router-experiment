import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from 'react-router-dom';
import App from './App';
import Patients from './routes/patients';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Splash from './routes/splash';

import './main.css';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="patients" element={<Patients />} />
        <Route path="status" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>
                  Select an item for overview screen example - this format can
                  be used for "patient overview"
                </p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="diagnostics"
          element={
            <main style={{ padding: '1rem' }}>
              <p>INVIVIDUAL VIEW - SCREEN REPLACEMENT - NAVBAR PERSISTS</p>
              <img src="https://www.glaukos.com/wp-content/uploads/2022/02/glaukos-career-products.png"></img>
            </main>
          }
        />
        <Route
          path="splash"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Splash</p>
              <img src="https://www.glaukos.com/wp-content/uploads/2021/08/about-us-banner.png"></img>
            </main>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>New Treatment Plan</p>
              <img src="https://www.glaukos.com/wp-content/uploads/2022/03/cornea-main-alt.png"></img>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
