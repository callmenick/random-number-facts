'use strict';

export default (function() {
  const BASE = 'http://numbersapi.com';
  const TYPES = [
    {
      id: 'trivia',
      name: 'Trivia',
      default: true
    },
    {
      id: 'year',
      name: 'Year',
      default: false
    },
    {
      id: 'math',
      name: 'Math',
      default: false
    }
  ];

  return { getTypes, getFact, getRandomFact };

  function getTypes() {
    return TYPES;
  }

  function getFact(number, type) {
    let url = `${BASE}/${number}/${type}`;

    return _fetch(url);
  }

  function getRandomFact() {
    let index = Math.floor(Math.random() * TYPES.length);
    let type = TYPES[index];
    let url = `${BASE}/random/${type.id}`;

    return _fetch(url);
  }

  function _fetch(url) {
    return fetch(`${url}?json`).then(response => {
      if (response.status !== 200) {
        throw {
          text: 'Sorry, there was an error fetching!',
          found: false
        };
      }

      return response.json();
    });
  }
})();
