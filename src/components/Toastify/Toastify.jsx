import { toast } from "react-hot-toast";

export const Toastify = {
  sucesso: (msg) => {
    toast.success(msg, {
      style: {
        background: "#705c9b",
        color: "#ffffff",
        fontWeight: "bold",
        borderRadius: "10px",
      },
    });
  },

  erro: (msg) => {
    toast.error(msg, {
      style: {
        background: "#ff4d4f",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "10px",
      },
    });
  },
};
