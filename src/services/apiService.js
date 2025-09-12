export const API_BASE_URL = "https://68c4584781ff90c8e61bf8e9.mockapi.io";
export const API_POSTS_URL = "https://68c4a03581ff90c8e61caffa.mockapi.io"

// READ
export const getAll = (url, endpoint) => {
  return fetch(`${API_BASE_URL}/${endpoint}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Erro ao buscar dados de ${endpoint}:`, error);
      return [];
    });
};

// CREATE
export const create = (url, endpoint, data) => {
  return fetch(`${API_BASE_URL}/${endpoint}`, {
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
    .catch(error => {
      console.error(`Erro ao criar item em ${endpoint}:`, error);
      return null;
    });
};

// UPDATE
export const update = (url, endpoint, id, data) => {
  return fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Erro ao atualizar item em ${endpoint}:`, error);
      return null;
    });
};

// DELETE
export const remove = (url, endpoint, id) => {
  return fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao deletar: ${response.status}`);
      }
      return true;
    })
    .catch(error => {
      console.error(`Erro ao deletar item em ${endpoint}:`, error);
      return false;
    });
};