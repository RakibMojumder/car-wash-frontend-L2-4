import { RouterProvider } from "react-router-dom";

import router from "./routes/router";

function App() {
  return (
    <div className="min-h-svh bg-[#F7F9FB] font-inter">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
