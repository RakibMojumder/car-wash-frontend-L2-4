import { RouterProvider } from "react-router-dom";

import router from "./routes/router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="min-h-svh bg-[#F7F9FB] font-oxanium">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
