import { RouterProvider } from "react-router-dom";

import router from "./routes/router";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="min-h-svh max-w-[1440px] mx-auto font-oxanium">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <Toaster
            toastOptions={{
              // unstyled: true,
              classNames: {
                error: "bg-red-100 text-red-500 text-base",
                success: "bg-green-50 text-green-500 text-base",
                warning: "bg-yellow-100 text-yellow-500 text-base",
                info: "bg-blue-100 text-blue-500 text-base",
              },
              duration: 1500,
            }}
          />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
