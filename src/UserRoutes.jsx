import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Loader from "shared/Loader/Loader";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AddProductPage = lazy(() => import("pages/AddProductPage/AddProductPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/products" element={<HomePage/>}/>
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
