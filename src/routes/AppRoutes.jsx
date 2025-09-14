import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Auth from "../pages/auth";
import IndexJogadora from "../pages/IndexJogadora";
import IndexAgente from "../pages/IndexAgente";
import Talentos from "../pages/Talentos";
import Notificacoes from "../pages/Notificacoes";
import Configuracoes from "../pages/Configuracoes";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Profile from "../components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Auth />
      </PublicRoute>
    )
  },
  {
    path: '/home/jogadora',
    element: (
      <ProtectedRoute>
        <IndexJogadora />
      </ProtectedRoute>
    )
  },
  {
    path: '/home/agente',
    element: (
      <ProtectedRoute>
        <IndexAgente />
      </ProtectedRoute>
    )
  },
  {
    path: '/talentos',
    element: (
      <ProtectedRoute>
        <Talentos />
      </ProtectedRoute>
    )
  },
  {
    path: '/notificacoes',
    element: (
      <ProtectedRoute>
        <Notificacoes />
      </ProtectedRoute>
    )
  },
  {
    path: '/configuracoes',
    element: (
      <ProtectedRoute>
        <Configuracoes />
      </ProtectedRoute>
    )
  },
  {
    path: '/perfil',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  }
]);
