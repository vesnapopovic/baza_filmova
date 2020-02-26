let allMovies = [];

fetch(`https://baza-filmova.herokuapp.com/filmovi/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        allMovies = data;
        console.log(allMovies);
        showRecentMovies();
    })
    .catch(e => {
        console.log(e);
    });


function showRecentMovies() {
    const numOfRecMov = 5;
    const recMov = allMovies.slice(-numOfRecMov);

    console.log(recMov);

    recMov.forEach((el, i = 2) => {
        document.getElementById('recentMovies').innerHTML += `
        <div id="oneMovie" class="item${i}">
            <div id="name">${el.naziv}</div>
            <img id="slika" src="${el.slika}" alt="${el.naziv}img">
            <div id="god">${el.godina}</div>
        </div>
        `;
        // i++;
    })

};

