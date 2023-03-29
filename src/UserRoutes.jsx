import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import("modules/Navigation/Navigation"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AddProductPage = lazy(() => import("pages/AddProductPage/AddProductPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Please wait. Your request is being processed.</p>}>
      <Routes>
        <Route path="/products" element={<HomePage/>}/>
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="*" element={<Navigation />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
