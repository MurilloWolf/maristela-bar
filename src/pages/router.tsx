import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products, Clients, Register, Seller } from ".";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients/*" element={<Clients />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/seller" element={<Seller />} />
    </Routes>
  );
}
export const router = createBrowserRouter([{ path: "*", Component: Root }]);
