const mobileMenu = ()  =>{
    const menu_btn =document.querySelector('.hamburger');
    menu_btn.classList.toggle('is-active');
    const mobile_menu =document.querySelector('.mobile-nav');
    mobile_menu.classList.toggle('is-active');

}