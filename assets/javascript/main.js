import { projects } from "./projects.js";



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

    let counter = 0;

    projects.forEach(project)

    function project(item){//#endregion
        counter++
        let name = item['title'];
        let description = item['description'];
        let img = item['img'];
        let technologyArray = item['technology'];
        
        let url = item['url']
        // console.log(technologyArray);

        let wrapper = 'project-card';
        if(counter % 2 === 0){
           wrapper = 'project-card-reverse'
        }  
        console.log(technologyArray['style']);
        // let list_html = "";

        // console.log(list_html);

        function foreach(technologyArray){
            
            
        }

        if(document.querySelector('.projects .container')){

            let wrapper = 'project-card';
            if(counter % 2 === 0){
                wrapper = 'project-card-reverse'
            }  
            document.querySelector('.projects .container').insertAdjacentHTML('beforeend','<div class="'+ wrapper +'">\
            <div class="info-card-img">\
            <a href="'+ url +'">\
                <img src="'+img+'" alt=""></div>\
                <div class="info-card">\
                    <h2>'+ name +'</h2>\
                    <p>'+description+'</p>\
                    <div class="technology-used">\
                        <ul>\
                            <li>'+technologyArray['architecture']+'</li>\
                            <li>'+technologyArray['style']+'</li>\
                        </ul>\
                    </div>\
                </div>\
            </div>');
        }else if(document.querySelector('.project-highlight .container')){
            let wrapper = 'highlight-card-left';
            if(counter % 2 === 0){
                wrapper = 'highlight-card-right'
            }  
            document.querySelector('.project-highlight .container').insertAdjacentHTML('beforeend','<div class="'+ wrapper +'">\
            <div class="info-card-img">\
            <a href="'+ url +'">\
                <img src="'+img+'" alt=""></div>\
                <div class="info-card">\
                    <h2>'+ name +'</h2>\
                    <p>'+description+'</p>\
                    <div class="technology-used">\
                        <ul>\
                            <li>'+technologyArray['architecture']+'</li>\
                            <li>'+technologyArray['style']+'</li>\
                        </ul>\
                    </div>\
                </div>\
            </div>');
        }
    }


   
