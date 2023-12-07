// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
const arrayImg = [
'./img/01.webp',
'./img/02.webp',
'./img/03.webp',
'./img/04.webp',
'./img/05.webp'
];

for( let i= 0; i< arrayImg.length; i++); {
     
const main = document.querySelector('main');
// const newDiv = document.createElement('div');

main.innerHTML += `
<div class="container-img d-flex align-items-center justify-content-center" >
            <div class="items active">
                 <img src="./img/01.webp">
            </div>
            <div class="items d-none">
                 <img src="./img/02.webp">
            </div>
            <div class="items d-none">
                 <img src="./img/03.webp">
            </div>
            <div class="items d-none">
                 <img src="./img/04.webp">
            </div>
            <div class="items d-none">
                 <img src="./img/05.webp">
            </div>
</div> 

`
}


// ${arrayImg[i]}