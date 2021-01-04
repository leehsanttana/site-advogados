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


function menuTabs() {
    const tab = document.querySelectorAll('.js-tab li');
    const content = document.querySelectorAll('.js-content section');

    /* function activeTabContent(i){

    } */

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
