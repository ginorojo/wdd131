const menu = document.querySelector('.hamburger');
const navegation = document.querySelector('.navegation');
const images=document.querySelectorAll('img');
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
    if(document.querySelectorAll('.full-screen').length>0)return;
    body.appendChild(overlay);
    btnClose.textContent = 'x';
    btnClose.classList.add('btn-Close');
    //while(navegation.children[5]){
        //navegation.removeChild(navegation.children[5]);
    navegation.appendChild(btnClose);
    closeMenu(btnClose,overlay);

}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            const image = entry.target;
            image.src =image.dataset.src;
            observer.unobserve(image);
        }

    });
});

images.forEach(image => {
    
    observer.observe(image);
});



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
