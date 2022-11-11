'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list');

const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
};

// console.log(adv);
adv.forEach(item => {
  item.remove();
}
);

genre.textContent = "Comedy";

wrapper.style.backgroundImage = 'url("img/1.jpg")';

seriesList.innerHTML = '';

seriesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">
    ${index+1} ${item}
  <div class="delete"></div>
  </li>
  `;
});

