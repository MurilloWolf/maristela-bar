import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { Toaster } from "./components/ui";
function App() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
