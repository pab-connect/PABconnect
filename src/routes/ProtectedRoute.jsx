import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user"); 

  if (!user) {
    // no caso se não tiver um user no localStorage ele n deixa entrar nas outras pages
    return <Navigate to="/login" replace />;
  }

  return children; // mas se tiver permite
}
