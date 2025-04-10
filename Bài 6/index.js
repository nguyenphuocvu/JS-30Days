const cities = [];

fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //ở đây chúng ta cần tìm hiểu xem thành phố hoặc tiểu bang
    // có khớp với những gì đã tìm kiếm không

    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
        <li>
         <span class="name">${cityName}, ${stateName}</span>
         <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
// const posts = [];

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => posts.push(...data));

// function findMatches(wordToMatch, posts) {
//   const regex = new RegExp(wordToMatch, 'gi');
//   return posts.filter(post => post.title.match(regex));
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, posts);
//   const html = matchArray.map(post => {
//     const regex = new RegExp(this.value, 'gi');
//     const title = post.title.replace(regex, `<span class="h1">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${title}</span>
//         <p>${post.body}</p>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
