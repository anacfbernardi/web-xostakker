import config from '../config';

const URL_PROFILES = `${config.URL_PADRAO}/profiles`;

function getAll() {
  return fetch(`${URL_PROFILES}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function get(id) {
  return fetch(`${URL_PROFILES}?/profiles?id=${id}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function getWithTweets(id) {
  return fetch(`${URL_PROFILES}?id={${id}}&_embed=tweets`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

export default {
  getAll,
  get,
  getWithTweets,
};
