// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


const arrayImg = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]   

// creo una array con dentro le img

console.log(arrayImg)

let itemImg = '';

// creo una costante senza valore 

for (let i = 0; i < arrayImg.length; i++){

    itemImg += `<div id="album-container" class="album"><img src="./img/${ arrayImg[i] }"></div>`;
};

// la mia costante senza valore la ficco in un ciclo dove assegno e add come valore un elemnto html

let slide = document.querySelector('#album').innerHTML = itemImg;

// creo un variante con assegnazione della variante contente elemnto html e a stampo nel id album

let next = document.getElementById('next');
let previous = document.getElementById('previous');

// creo due varianti per i bottoni che mi faranno scorrere le img nel carosello

let carousel = document.getElementsByClassName("album");

//  ho creato una variante con assegnazione della classe con display-none

let counter = 0;

//  creato un contatore con valore zero che mi servirà per slidare le foto nel carosello

carousel[counter].classList.add('visual'); 

// aggiungo alla variante carousel [ con il valore di counter] la classe block

next.addEventListener("click", function(){

    carousel[counter].classList.remove('visual');

    if ( counter < arrayImg.length -1 ){

    counter ++;

    }
    else{

    counter = 0;

    }
    carousel[counter].classList.add('visual');
})

// ho creato un loop infinito con il bottone next e previous in modo tale che lo slider non si fermerà all'ultima img ma ricomincerà da capo

previous.addEventListener("click", function(){
    carousel[counter].classList.remove('visual');

    if ( counter != 0){
        counter --;
    }
    else{
        counter = arrayImg.length-1;
    }
    carousel[counter].classList.add('visual');
})