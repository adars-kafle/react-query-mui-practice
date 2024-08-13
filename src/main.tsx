import React from "react";
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
