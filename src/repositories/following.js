import config from '../config';

const URL_FOLLOWING = `${config.URL_PADRAO}/following`;

function getAll() {
  return fetch(`${URL_FOLLOWING}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function getByIdProfile(idProfile) {
  return fetch(`${URL_FOLLOWING}?idProfile=${idProfile}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

export default {
  getAll,
  getByIdProfile,
};
