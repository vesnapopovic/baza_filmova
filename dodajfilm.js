
var slikaurl = document.getElementById('url');
var prazno = document.getElementById('prazno');

function prikazisliku() {
    prazno.src = slikaurl.value;
}
slikaurl.addEventListener('blur', prikazisliku);

