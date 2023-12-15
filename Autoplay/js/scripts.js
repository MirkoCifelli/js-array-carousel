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



console.log(arrayImg)

let itemImg = '';

 

for (let i = 0; i < arrayImg.length; i++){

    itemImg += `<div id="album-container" class="album"><img src="./img/${ arrayImg[i] }"></div>`;
};



let slide = document.querySelector('#album').innerHTML = itemImg;



let next = document.getElementById('next');
let previous = document.getElementById('previous');
let stop = document.getElementById('stop');



let carousel = document.getElementsByClassName("album");



let counter = 0;
// prova clock
let clock = setInterval(() => {
    carousel[counter].classList.remove('visual');

    if ( counter < arrayImg.length -1 ){

    counter ++;

    }
    else{

    counter = 0;

    }
    carousel[counter].classList.add('visual');
}, 3000);

carousel[counter].classList.add('visual'); 



next.addEventListener("click", function(){

    carousel[counter].classList.remove('visual');

    if ( counter < arrayImg.length -1 ){

    counter ++;

    }
    else{

    counter = 0;

    }
    carousel[counter].classList.add('visual');
    // clearInterval(clock);
})

stop.addEventListener('click', function(){
    clearInterval(clock);
})

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