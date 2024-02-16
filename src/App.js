
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Cart from './Pages/Cart';
import { productsData } from './api/Api';
import Product from './Components/Product';
import Login from './Pages/Login';
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/Login',
        element: <Login />
      }
    ]
  }
])

function App() {
  return (
    <div className='font-bodyfont'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
