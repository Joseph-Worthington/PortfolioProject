const mobileMenu = ()  =>{
    const menu_btn =document.querySelector('.hamburger');
    menu_btn.classList.toggle('is-active');
    const mobile_menu =document.querySelector('.mobile-nav');
    mobile_menu.classList.toggle('is-active');

}

const technologyWrapper = document.getElementsByClassName('technology-wrapper');
const technologyCard = document.querySelector('.technology-wrapper .info-card');


    technologyWrapper.onmouseenter = (event) => {
        technologyCard.classList.toggle('is-active');
        console.log('it is active');
    };
    
    technologyWrapper.onmouseleave = (event) => {
        technologyCard.classList.toggle('is-active')
        console.log('it has been deactivated')
    };

