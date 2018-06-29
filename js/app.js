const btnNavIcon = document.querySelector('#nav-icon');
const btnNavPanel = document.querySelector('#btn-nav-panel');

btnNavIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='250px';
});

btnNavPanel.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='0px';
});