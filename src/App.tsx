import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrackRedirectLinks from './Components/TrackRedirectLinks';

import AppRoutes from './Lib/Routes/AppRoutes';

function App() {

  return (
    <div className='App'>
      <TrackRedirectLinks />
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
