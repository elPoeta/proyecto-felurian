let tiempo = 5000;
let i = 0;
const btnNavIcon = document.querySelector('#nav-icon');
const btnNavPanel = document.querySelector('#btn-nav-panel'); 		
const imagenes = ['img/banner1.png','img/banner3.png','img/banner2.png','img/banner4.png'];
const slider = document.querySelector('#slider');

btnNavIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='250px';
});

btnNavPanel.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='0px';
});

const cambiarImagen = () =>{
  slider.src = imagenes[i];
  slider.classList.add('fade-in');
	if(i < imagenes.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
   setTimeout(() => slider.classList.remove('fade-in'), 500);
   setTimeout('cambiarImagen()',tiempo);
}
window.onload=cambiarImagen;