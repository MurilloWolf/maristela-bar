import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
function App() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
