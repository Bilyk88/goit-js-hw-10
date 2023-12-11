import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

breedSelect.addEventListener('change', onSelect);


function createMarkupSelect(arr) {
    return arr.map(({id, name}) => `<option value="${id}">${name}</option>`).join('');
}

  function toggleElements(showElement, hideElement) {
      showElement.classList.remove("is-hidden");
      hideElement.classList.add("is-hidden");
}


fetchBreeds().then(data => { 

    toggleElements(breedSelect, loader);
    breedSelect.insertAdjacentHTML("beforeend", createMarkupSelect(data));

    
}).catch(error => Notify.failure('Oops! Something went wrong! Try reloading the page!'));


function onSelect(e) {

    toggleElements(loader, catInfo);
    fetchCatByBreed(e.currentTarget.value).then(data => {
        toggleElements(catInfo, loader);
        catInfo.innerHTML = createMarkupCatInfo(data);

    }).catch(error => {
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
    
}

function createMarkupCatInfo(arr) {

    return arr.map(item => `<img src="${item.url}" alt="${item.url}" width="500px">
        <div class="cat-description"><h2>${item.breeds[0].name}</h2>
        <p>${item.breeds[0].description}</p>
        <p>${item.breeds[0].temperament}</p></div>`
    ).join('');
}


    
    

    