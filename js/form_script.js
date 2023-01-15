//Referenz zum Form
var eventForm = document.getElementById("event_form");

const ergebnisse = document.querySelector('#ergenisse');

//Referenz zu den Ergebnisstexten
const text_jugendschutz = document.querySelector('#text_jugendschutz');
const text_ausschank = document.querySelector('#text_ausschank');
const text_ort = document.querySelector('#text_ort');

//Funktion start
eventForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //ruft daten aus dem Form ab und packt sie in das Objekt
    const formData = new FormData(eventForm);
    console.log('formData:', formData);

    // ergbenisse zurück setzen
    ergebnisse.querySelectorAll('.collapse').forEach(function (ergeniss ) {
        ergeniss.classList.remove('show');
    });

    //variablen für jedes Eingabefeld
    const ev_vorname = formData.get('vorname');
    const ev_nachname = formData.get('nachname');
    const ev_art = formData.get('art');
    const ev_ort = formData.get('ort');
    const ev_alkohol = formData.get('alkohol');



    //Bedingungen

    //Input und select
    if(ev_art == 'konzert') {
        text_ausschank.classList.add('show');
    }

    //radio
    if(ev_ort === 'indoor'){
        text_ort.classList.add('show');
    }

    // checkbox
    if (ev_alkohol === 'on') {
        text_jugendschutz.classList.add('show');
    }


});

/*alert*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('submitBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('sucessfully submitted', 'success')
  })
}
