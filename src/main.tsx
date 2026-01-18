import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import ToastNotification from './components/ToastNotification';

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
    <ToastNotification />
  </>
);