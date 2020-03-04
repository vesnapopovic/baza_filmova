var nazivfilma = document.getElementById('naziv');
var prikazatifilm = document.getElementById('dodat');
var slikaurl = document.getElementById('url');
var submitdugme = document.getElementById('submit');
var prazno = document.getElementById('prazno');

function prikazisliku() {
    console.log(slikaurl.value);
    prazno.src = slikaurl.value;
};
slikaurl.addEventListener('blur', prikazisliku);