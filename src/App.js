import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { routes } from './Pages/Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}> </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
