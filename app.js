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

    moment.locale('sr'); // ukljucivanje srpskog jezika za biblioteku moment.js

    recMov.forEach((el, i = 2) => {
        x = el.dodat;
        y = moment(x, "YYYYMMDD").fromNow();//racuna pre koliko vremena je dodat film, metoda iz biblioteke moment.js ('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js')
        document.getElementById('recentMovies').innerHTML += `
        <div id="oneMovie" class="item${i}">
            <div id="iSlika">
            <div id="dodat"><p>Film je dodat  ${y} </p></div><br>
                <img id="slika" src="${el.slika}" alt="${el.naziv}img">
            </div> 
            <div id="ime-god">
                <div id="name">${el.naziv}</div>
                <div id="god">${el.godina}</div>
            
                
            </div>   
        </div>
        `;
        // i++;
    })

};
