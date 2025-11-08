// URL para os recursos (jogadoras, olheiros)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// URL para os posts
export const API_POSTS_URL = import.meta.env.VITE_API_POSTS_URL;

// READ
export const getAll = (url, endpoint) => {
  return fetch(`${url}/${endpoint}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      console.error(`Erro ao buscar dados de ${endpoint}`);
      return [];
    });
};

// CREATE
export const create = (url, endpoint, data) => {
  return fetch(`${url}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      console.error(`Erro ao criar item em ${endpoint}`);
      return null;
    });
};

// UPDATE
export const update = (url, endpoint, id, data) => {
  return fetch(`${url}/${endpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao atualizar item em ${endpoint}: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      console.error(`Erro ao atualizar item em ${endpoint}`);
      return null;
    });
};

// DELETE
export const remove = (url, endpoint, id) => {
  return fetch(`${url}/${endpoint}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao deletar: ${response.status}`);
      }
      return true;
    })
    .catch(() => {
      console.error(`Erro ao deletar item em ${endpoint}`);
      return false;
    });
};