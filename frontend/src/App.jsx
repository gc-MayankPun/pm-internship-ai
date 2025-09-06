import { Routes, Route } from "react-router-dom";

// Routes
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AppWrapper from "./components/AppWrapper";
import InternshipForm from "./components/IntershipForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<InternshipForm />} />
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute>
            <AppWrapper>
              <StudentDashboard />
            </AppWrapper>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AppWrapper>
              <AdminDashboard />
            </AppWrapper>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
