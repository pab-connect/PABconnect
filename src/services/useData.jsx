import { useEffect, useState } from "react";
import { getAll, API_BASE_URL, API_POSTS_URL } from "./apiService";

export default function useData(target) {
  const baseUrlOptions = ["jogadoras", "olheiros"];
  const url = baseUrlOptions.includes(target) ? API_BASE_URL : API_POSTS_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true); // começa carregando
      const fetchedData = await getAll(url, target);
      setData(fetchedData);
    } catch {
      console.error("Erro ao buscar posts");
    } finally {
      setLoading(false); // termina o carregamento
    }
  }

  useEffect(() => {
    fetchData();
  }, [target]);

  // retorna os dois
  return { data, loading };
}
