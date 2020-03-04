
var filmovi = [];

fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(response => response.json())
    .then(data => {
        filmovi = data;
        console.log(filmovi);
        prikaziFilmove();
    })

// prikaz filmova na celoj stranici u vise kolona


prikazFilmova = document.getElementById('iPrikazFilmova');

function prikaziFilmove() {
    for (let i = 0; i < filmovi.length; i++) {
        prikazFilmova.innerHTML += (`<div class="OneMovie"><div class="naziv">${filmovi[i].naziv}</div><div class="slika"><img src="${filmovi[i].slika}" alt=""></div><div class="godina">${filmovi[i].godina}</div></div>`);

    }
}



//pretraga filmova


function pronadji() {
    prikazFilmova.innerHTML = ""
    var trazeniFilm = document.getElementById('iPronadjiFilm').value;


    rezultatPretrage = [];

    for (let i = 0; i < filmovi.length; i++) {
        var naziv = filmovi[i].naziv.toLowerCase();
        rezultat = naziv.includes(trazeniFilm);

        if (rezultat == true) {
            rezultatPretrage.push(filmovi[i]);
        }
    }


    for (let j = 0; j < rezultatPretrage.length; j++) {
        prikazFilmova.innerHTML += (`${rezultatPretrage[j].naziv}<br><br><img src="${rezultatPretrage[j].slika}" alt=""><br><br>${rezultatPretrage[j].godina}<br><br><br> `);

    }

}

pretraga = document.getElementById('iPronadjiFilm');
pretraga.addEventListener('input', pronadji);

//sortiranje filmova po godini

function sortirajUzlazno() {
    filmovi.sort(function (a, b) { return a.godina - b.godina });
    prikazFilmova.innerHTML = "";
    prikaziFilmove();
}

function sortirajSilazno() {
    filmovi.sort(function (a, b) { return b.godina - a.godina });
    prikazFilmova.innerHTML = "";
    prikaziFilmove();
}

najstariji = document.getElementById('iNajstariji');
najmladji = document.getElementById('iNajmladji');
najstariji.addEventListener('click', sortirajUzlazno);
najmladji.addEventListener('click', sortirajSilazno);



//sortiranje filmova po nazivu


function sortirajZA() {
    filmovi.sort(function (a, b) {
        var nameA = a.naziv.toUpperCase();
        var nameB = b.naziv.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }


        return 0;
    });
    prikazFilmova.innerHTML = "";
    prikaziFilmove();
}


function sortirajAZ() {
    filmovi.sort(function (a, b) {
        var nameA = a.naziv.toUpperCase();
        var nameB = b.naziv.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }


        return 0;
    });
    prikazFilmova.innerHTML = "";
    prikaziFilmove();
}

az = document.getElementById('iAZ');
za = document.getElementById('iZA');
az.addEventListener('click', sortirajAZ);
za.addEventListener('click', sortirajZA);






