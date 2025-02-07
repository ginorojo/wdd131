const menu = document.querySelector('.hamburger');
const navegation = document.querySelector('.navegation');

document.addEventListener('DOMContentLoaded',()=>{
    events();

});

const events= ()=>{
    menu.addEventListener('click',openMenu)
}

const openMenu = () =>{
    navegation.classList.remove('hide');
    bottonClose();

}

const bottonClose = () =>{
    const btnClose = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('full-screen');
    const body = document.querySelector('body');
    body.appendChild(overlay);
    if(document.querySelectorAll('.full-screen').lenght>0)return;
    btnClose.textContent = 'x';
    btnClose.classList.add('btn-Close');
    while(navegation.children[5]){
        navegation.removeChild(navegation.children[5]);
    }
    navegation.appendChild(btnClose);
    closeMenu(btnClose,overlay);

} 

const closeMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegation.classList.add('hide');
        overlay.remove();
        boton.remove();

    });
    overlay.onclick = function(){
        overlay.remove();
        navegation.classList.add('hide');
    }
}