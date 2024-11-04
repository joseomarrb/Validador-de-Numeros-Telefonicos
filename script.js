//Variables
const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");
const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

//Eventos
checkBtn.addEventListener("click", inputCheck);
clearBtn.addEventListener("click", inputClear);

//Funciones
function inputCheck() {
    const input = userInput.value.trim();
    if (!input) {
        display.reset();
        return alert("Please provide a phone number");
    } 
    
    if ( !regex.test(input) ) {
        display.reset();
        mostrarError("Invalid US number: ", input);
    }
    
    if ( regex.test(input) ){
        mostrarAprobado("Valid US number: ", input);
        display.reset();
    }
};

function inputClear() { 
    while(results.firstChild){
        results.removeChild(results.firstChild); 
    }
};

const mostrarError = (error, valor) => {
    const paragraph = document.createElement("P");
    paragraph.classList.add("error", "results");
    paragraph.textContent = error + valor;
    results.appendChild(paragraph);
};

const mostrarAprobado = (aprobado, valor) => {
    const paragraph = document.createElement("P");
    paragraph.classList.add("aprobado", "results");
    paragraph.textContent = aprobado + valor;
    results.appendChild(paragraph);
};