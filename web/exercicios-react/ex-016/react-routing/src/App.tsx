import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductsDetails";

// const routeDefintions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefintions)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> }, //index: true ou path: ""
      { path: "products", element: <ProductsPage /> },
      {path: `products/:productId`, element: <ProductDetailsPage/>}
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
