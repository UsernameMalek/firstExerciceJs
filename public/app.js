//const chose = document.querySelector("#chose").value;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const temperature = e.target[0].value;
    const chose = e.target[1].value;



    if (chose === 'fahrenhei') {


        const conv = (temperature * (9/5) ) + 32;
       

       resulte.innerHTML = "The temperature in Fahrenheit is " + Math.floor(conv) + " (°F)";
    }
    else if (chose === 'celsius') {

        const conv = (5/9) * (temperature - 32);
        resulte.innerHTML = "The temperature in degree celsius is " + Math.floor(conv) + " (°C)", conv;


    }

});




