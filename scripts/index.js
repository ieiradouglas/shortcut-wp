button = document.getElementById('btEnviar');
console.log('injetado')
number = document.getElementById('number');

alert = document.getElementById('alert')

button.addEventListener('click', () => {
    if(number.value == ""){
        alert.style.display = "block";
    }
    else {
        button.href = `https://wa.me/+55${number.value}`
    }
})

