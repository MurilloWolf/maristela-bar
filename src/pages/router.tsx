import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products, Clients, Register } from ".";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients/*" element={<Clients />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export const router = createBrowserRouter([{ path: "*", Component: Root }]);
