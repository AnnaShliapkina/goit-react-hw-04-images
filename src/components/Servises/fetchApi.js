const KEY = '28462195-e21a9acc0b582db9a2dca3b99';
const URL = 'https://pixabay.com/api/';

export function fetchAPI(value, page) {
  return fetch(
    `${URL}/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`Something went wrong.Please try one more time!`)
      );
    })
    .then(r => {
      return {
        hits: r.hits.map(({ id, largeImageURL, webformatURL, tags }) => ({
          id,
          largeImageURL,
          webformatURL,
          tags,
        })),
        totalHits: r.totalHits,
      };
    });
}
