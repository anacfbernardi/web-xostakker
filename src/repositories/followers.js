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

function getByIdProfile(idProfile) {
  return fetch(`${URL_FOLLOWERS}?idProfile=${idProfile}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

export default {
  getByIdProfile,
  getAll,
};
