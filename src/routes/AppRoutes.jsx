import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Auth from "../pages/auth";
import IndexJogadora from "../pages/IndexJogadora";
import IndexAgente from "../pages/IndexAgente";
import Talentos from "../pages/Talentos";
import Notificacoes from "../pages/Notificacoes";
import Configuracoes from "../pages/Configuracoes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Auth />
  },
  {
    path: '/home/jogadora',
    element: <IndexJogadora />
  },
  {
    path: '/home/agente',
    element: <IndexAgente />
  },
  {
    path: '/talentos',
    element: <Talentos />
  },
  {
    path: '/notificacoes',
    element: <Notificacoes />
  },
  {
    path: '/configuracoes',
    element: <Configuracoes />
  }
])