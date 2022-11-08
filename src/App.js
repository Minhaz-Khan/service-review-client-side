import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router/router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
