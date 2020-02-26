fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // prikaz filmova na celoj stranici u vise kolona


        prikazFilmova = document.getElementById('iPrikazFilmova');
        for (let i = 0; i < data.length; i++) {
            prikazFilmova.innerHTML += (`${data[i].naziv}<br><br><img src="${data[i].slika}" alt=""><br><br>${data[i].godina}<br><br><br>`);

        }



        //pretraga filmova


        function pronadji() {
            prikazFilmova.innerHTML = ""
            var trazeniFilm = document.getElementById('iPronadjiFilm').value;


            rezultatPretrage = [];

            for (let i = 0; i < data.length; i++) {
                var naziv = data[i].naziv.toLowerCase();
                rezultat = naziv.includes(trazeniFilm);

                if (rezultat == true) {
                    rezultatPretrage.push(data[i]);
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
            data.sort(function (a, b) { return a.godina - b.godina });
            prikazFilmova.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                prikazFilmova.innerHTML += (`${data[i].naziv}<br><br><img src="${data[i].slika}" alt=""><br><br>${data[i].godina}<br><br><br>`);

            }
        }

        function sortirajSilazno() {
            data.sort(function (a, b) { return b.godina - a.godina });
            prikazFilmova.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                prikazFilmova.innerHTML += (`${data[i].naziv}<br><br><img src="${data[i].slika}" alt=""><br><br>${data[i].godina}<br><br><br>`);

            }
        }

        select = document.getElementById('iGodina');
        select.addEventListener('change', odaberi)
        console.log(select.selectedIndex);
        function odaberi() {
            if (select.selectedIndex == 1) {
                sortirajUzlazno();

            }
            if (select.selectedIndex == 2) {
                sortirajSilazno();
            }

        }








    })