const options = {
    headers: {
        'x-api-key': 'live_6JrrI9iaK43xOHQ3oSyRe6ZmiETdBKq727QihrOUin2EW83aGbxS5lQ7MAWvbh6g'
    }
}
const BASE_URL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
   return fetch(`${BASE_URL}breeds`, options).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`, options).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();

    })
}
