let boton = document.getElementById('BUTTON');
let documento = document.querySelectorAll('section');
boton.addEventListener('click', () => {
  boton.classList.toggle('on');
  documento.forEach(section => section.classList.toggle('dark'));
});
