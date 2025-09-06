// src/components/ProtectedRoute.jsx
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import Loader from "./ui/Loader";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  // Wait until Clerk knows the auth state
  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  // If not signed in → Clerk's sign-in UI
  if (!isSignedIn) {
    // Send data to backend
    return <RedirectToSignIn redirectUrl={window.location.pathname} />;
    // or: return <Navigate to="/" replace />;  <-- if you want homepage instead
  }

  return children;
};

export default ProtectedRoute;
