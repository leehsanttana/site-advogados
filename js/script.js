const sectionMenu = document.querySelector('.menu-top');
const buttonBar = document.querySelector('.btn');

function scrollEfectTopNav(){
    const nav = document.querySelector('.top');
    const menu = document.querySelectorAll('.menu-top li a');

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 50){
            nav.classList.add('top-change');
        } else {
            nav.classList.remove('top-change');
        }
    });

    function activeLink(i){
        menu.forEach((links) => {
            links.classList.remove('active');
        })
    
        menu[i].classList.add('active');
    }
    
    menu.forEach((link, i) => {
        link.addEventListener('click', () => {
            activeLink(i);
        });
    });
}

scrollEfectTopNav();

function showMenu(){
    sectionMenu.classList.toggle('show-menu');
}

function activeShowMenu(){
    buttonBar.addEventListener('click', showMenu);
}

activeShowMenu();

function scrollInternalLink(){
    const menu = document.querySelectorAll('.scroll li a[href^="#"]');

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function scrollToPosition(to) {

        window.scroll({
        top: to,
        behavior: "smooth",
        });
    }

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.currentTarget)- 60;
        scrollToPosition(to);
        sectionMenu.classList.remove('show-menu');
    }

    menu.forEach((links, i) => {
        links.addEventListener('click', scrollToIdOnClick);
    })
}

scrollInternalLink();



function menuTabs() {
    const tab = document.querySelectorAll('.js-tab li');
    const content = document.querySelectorAll('.js-content section');

    tab[0].classList.add('ativo');
    content[0].classList.add('ativo');

    function activeLink(i){

        tab.forEach((li) => {
            li.classList.remove('ativo');
        });
        content.forEach((section) => {
            section.classList.remove('ativo');
        });

        tab[i].classList.add('ativo');
        content[i].classList.add('ativo');
    }

    tab.forEach((li, i) => {
        li.addEventListener('click', () => {
            activeLink(i);
        });
    })
};

menuTabs();

function initAnimacaoScroll() {
    const mainScroll = document.querySelectorAll('.js-scroll');
    const leftScroll = document.querySelectorAll('.js-scroll-left');
    const topScroll = document.querySelectorAll('.js-scroll-top');

    if(mainScroll.length){
        function animaScroll() {
            mainScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top -500;
                console.log(sectionTop);
                if(sectionTop < 0){
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        
        animaScroll()
        
        window.addEventListener('scroll', animaScroll);
    }

    if(leftScroll.length){
        function animaScroll() {
            leftScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top -500;
                console.log(sectionTop);
                if(sectionTop < 0){
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        
        animaScroll()
        
        window.addEventListener('scroll', animaScroll);
    }

    if(topScroll.length){
        function animaScroll() {
            topScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top -500;
                console.log(sectionTop);
                if(sectionTop < 0){
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        
        animaScroll()
        
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();

const clientes = document.querySelector('.js-numero-c');
const casos = document.querySelector('.js-numero-cd');
const processos = document.querySelector('.js-numero-p');


var count = new Number();
var count = 200;
 
function contagem(){
    if((count + 1) <= 1000){
        count += 1;
        clientes.innerHTML = count;
        casos.innerHTML = count;
        processos.innerHTML = count;
        setTimeout('contagem();', 10);
    }
}

contagem();