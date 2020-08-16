import config from '../config';

const URL_TWEETS = `${config.URL_PADRAO}/tweets`;

function getAll() {
  return fetch(`${URL_TWEETS}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function getByIdProfile(idProfile) {
  return fetch(`${URL_TWEETS}?idProfile=${idProfile}`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }
    throw new Error('Não foi possível obter os dados');
  });
}

function create(tweet) {
  return fetch(`${URL_TWEETS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(tweet),
  })
    .then(async (response) => {
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
  create,
};
