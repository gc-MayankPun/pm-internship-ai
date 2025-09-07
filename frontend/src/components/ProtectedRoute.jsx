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
    // Send data to backend - Only if we are following that approach otherwise leave it as it is!!
    return <RedirectToSignIn redirectUrl={window.location.pathname} />;
    // return <RedirectToSignIn redirectUrl={"/login"} />;
    // or: return <Navigate to="/" replace />;  <-- if you want homepage instead
  }

  return children;
};

export default ProtectedRoute;
