const searchString = document.getElementById('search');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => window.location.href =`https://www.youtube.com/results?search_query= ${searchString.value}`);
