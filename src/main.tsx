import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Routes
import MainRoutes from "./routes";

// Toaster and it's css
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");

const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <MainRoutes />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            theme="colored"
            transition={Flip}
          />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
};

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
