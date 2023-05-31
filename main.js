/*Deslices*/ 
const sr= ScrollReveal({
  origin: "top",
  distance: '50px',
  duration: 2000,
  delay: 100,
  reset: true
})
sr.reveal(`.home`);

const src= ScrollReveal({
  origin: "left",
  distance: '50px',
  duration: 2000,
  delay: 100,
  reset: true
})
sr.reveal(`.iconos`);

const srs= ScrollReveal({
  origin: "bottom",
  distance: '20px',
  duration: 2000,
  delay: 60,
  reset: false
})
sr.reveal(`.contacta`);

/*Funcion POPUP IMAGE*/
document.querySelectorAll('#galeria img').forEach(image =>{
  image.onclick =()=>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
};

/*Funcion POPUP COTIZAR*/
document.querySelectorAll('#boton-cotizar').forEach(image =>{
  image.onclick =()=>{
    document.querySelector('.popup-cotizar').style.display = 'block';
    document.querySelector('#cotizar').style.display = 'block';
  }
});

document.querySelector('.popup-cotizar span').onclick = () =>{
  document.querySelector('.popup-cotizar').style.display = 'none';
};

