let jsSelector = document.getElementById("tipoConversion");
let jsEleccion;
let jsResultado = document.getElementById("resultado");


jsSelector.addEventListener("change", cambiarTipoConversion);
function cambiarTipoConversion() {
    let eleccion = jsSelector.value;
    jsEleccion = eleccion;
    console.log(jsEleccion);
}

function conversion() {
    let jsInput = document.getElementById("numeroAConvertir").value;

 
    fetch("https://api.bluelytics.com.ar/v2/latest")
        .then(listaDolarValor => listaDolarValor.json())
        .then((salida) => {
            listaDolarValor = salida
            let resultadoBlue;
            let resultadoOficial;
            let dolarOficial = listaDolarValor.oficial.value_avg;
            let dolarBlue = listaDolarValor.blue.value_avg;
            
            console.log(dolarBlue);
            console.log(dolarOficial);

            switch (jsEleccion) {
                case "pesoBlue":
                    resultadoBlue = dolarBlue * jsInput;
                    jsResultado.textContent = "US$" + jsInput + " son: $" + resultadoBlue;
                    jsResultado.style.display = "flex";
                    break
                case "pesoOficial":
                    resultadoBlue = dolarOficial * jsInput;
                    jsResultado.textContent = "US$" + jsInput + " son: $" + resultadoBlue;
                    jsResultado.style.display = "flex";
                    break
                case "dolarBlue":
                    resultadoBlue = (jsInput / dolarBlue).toFixed(2);
                    jsResultado.textContent = "$" + jsInput + " son: US$" + resultadoBlue;
                    jsResultado.style.display = "flex";
                    
                    break
                case "dolarOficial":
                    resultadoBlue = (jsInput / dolarOficial).toFixed(2);
                    jsResultado.textContent = "$" + jsInput + " son: US$" + resultadoBlue;
                    jsResultado.style.display = "flex";
                    break
            }

            // if (jsEleccion == "pesoBlue") {
            //     resultadoOficial = (jsInput * dolarOficial).toFixed(2);
            //     resultadoBlue = (jsInput * dolarBlue).toFixed(2);

            //     jsResultado.textContent = `$${jsInput} = US$${resultadoOficial} Oficiales, y US$${resultadoBlue} Blue}`;

            // } else if(jsEleccion == "peso"){
            //     resultadoOficial = (jsInput / dolarOficial).toFixed(2);
            //     resultadoBlue = (jsInput / dolarBlue).toFixed(2);

            //     jsResultado.textContent = `$${jsInput} = US$${resultadoOficial} Oficiales, y US$${resultadoBlue} Blue}`
            // }

            console.log(jsEleccion);
        })
    
}

