import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/Store.js";
import { router } from "./router.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002244",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
