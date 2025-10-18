import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, org=false }) {
  const user = JSON.parse(localStorage.getItem("user")); 
  const tipo = user.tipo
  if (!user) {
    // no caso se não tiver um user no localStorage ele n deixa entrar nas outras pages
    return <Navigate to="/login" replace />;
  }
  if (org === true && tipo !== "organizacao") {
    return <Navigate to="/eventos" replace />
  }
  return children; // mas se tiver permite
}
