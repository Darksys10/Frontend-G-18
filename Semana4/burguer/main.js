// const ham = document.querySelector('.ham');
// const enlaces = document.querySelector('.link-menu');
// const barras = document.querySelectorAll('.ham span');

// .ham.addEventListener('click',()=> {
//     enlaces.classList.toggle('activado');
//     barras.foreach(child => {child.classList.toggle('animado') } };
//     ham.classList.toggle('girar')
//     );

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.link-menu');
const barras = document.querySelector('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
    