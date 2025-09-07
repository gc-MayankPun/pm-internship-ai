import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl={"/"}
        appearance={{
          baseTheme: "dark",
          variables: {
            colorPrimary: "#E9CD5F", // yellow
            colorBackground: "#171C1C", // dark bg
            colorText: "white",
          },
          elements: {
            userButtonPopoverActionButton: {
              color: "white", // default text
              backgroundColor: "transparent",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "#E9CD5F", // highlight bg on hover
                color: "#171C1C", // dark text for contrast
              },
            },
            userButtonPopoverActionButtonText: {
              color: "inherit", // inherit from parent (so it changes on hover too)
            },
            userButtonPopoverFooter: {
              borderTop: "1px solid #333",
            },
          },
          layout: {
            unsafe_disableDevelopmentModeWarnings: true,
          },
        }}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
