
var form = document.getElementById("event_form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var option1 = document.getElementsByName("option1")[0];
    var option2 = document.getElementsByName("option2")[0];
    var option3 = document.getElementsByName("option3")[0];
    var option4 = document.getElementsByName("option4")[0];
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
  
    var sancar = document.getElementByName("sancar")[0];
    var sani = document.getElementById("sani")

    if (option1.checked) {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }
    if (option2.checked) {
        div2.style.display = "block";
    } else {
        div2.style.display = "none";
    }
    if (option3.checked) {
        div3.style.display = "block";
    } else {
        div3.style.display = "none";
    }
    if (option4.checked) {
        div4.style.display = "block";
    } else {
        div4.style.display = "none";
    }

  
    if (sancar.checked){
      sani.style.display = "block";
    }else{
      sani.style.display = "none";
    }
    alert('successfully submitted');
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
    alert('Nice, you triggered this alert message!', 'success')
  })
}
