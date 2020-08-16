import config from '../config';

const URL_FOLLOWERS = `${config.URL_PADRAO}/followers`;

function getAll() {
  return fetch(`${URL_FOLLOWERS}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_FOLLOWERS}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
