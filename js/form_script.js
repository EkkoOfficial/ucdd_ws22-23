var form = document.getElementById("myform");
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
    alert('successfully submitted');
});

