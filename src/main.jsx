import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { indexRoute } from './routes';
import { AppContextProvider } from './context/app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={indexRoute} />
    </AppContextProvider>
  </React.StrictMode>
);
