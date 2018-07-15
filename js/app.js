let pos = 0;
let turno = 0;
let txtBanner = ["Poesía embotellada", "Tienda de vinos"];
let tipeo = document.querySelector('#tipeo-contenedor');
const speed = 250;
const btnNavIcon = document.querySelector('#nav-icon-hamburger');
const btnNavPanel = document.querySelector('#btn-nav-panel'); 		




setTimeout(autoTipeo, speed);

function autoTipeo() {
  if (pos < txtBanner[turno].length) {
    tipeo.innerHTML += txtBanner[turno].charAt(pos);
    pos++;
    setTimeout(autoTipeo, speed);
  } else {
  	setTimeout(borrarTipeo, speed+100);
  }
}

function borrarTipeo() {
	if (pos >= 0) {
      var str=txtBanner[turno].toString().substring(0, pos);
      tipeo.innerHTML = str;
      pos--;
      setTimeout(borrarTipeo, speed-100);
    } else {
      turno++;
      if(turno>=txtBanner.length) 
        turno=0;
      setTimeout(autoTipeo, speed);
    }
}


btnNavIcon.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='250px';
});

btnNavPanel.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='0px';
});



