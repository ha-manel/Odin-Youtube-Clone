const searchString = document.getElementById('search');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => window.location.href =`https://www.youtube.com/results?search_query= ${searchString.value}`);

const hamburgerBtn = document.querySelector('#hamburger-menu');
const navLinks = document.querySelector('.links-div');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})
