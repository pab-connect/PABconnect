import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    const user = localStorage.getItem("user");
    const tipo = JSON.parse(user)?.tipo //checa se tem o user antes de pegar o tipo
    if (user) {
        // se ja tiver um user ele manda direto pras pages principais e não deixa entrar no login
        // alem disso ele checa se o user é uma jogadora ou um agente
        if (tipo === "jogadora") {
            return <Navigate to="/home/jogadora" replace />;
        } else if (tipo === "olheiro") {
            return <Navigate to="/home/agente" replace />;
        } else if (tipo === "organizacao") {
            return <Navigate to="/home/organizacao" replace />
        }
    }

    return children;
}
