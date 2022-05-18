// dropdown 
let intervalId
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path
        const dataAtr = document.querySelector(`[data-target=${menu}]`);
        document.querySelectorAll('.sublist').forEach(el => {
            if(!dataAtr.classList.contains('open')){
                el.classList.remove('sublist-active')
                el.classList.remove('open')
                dataAtr.classList.add('sublist-active')
                intervalId = setTimeout(() => {
                    dataAtr.classList.add('open')
                }, 0)
            }
            else{
                clearTimeout(intervalId);
                dataAtr.classList.remove('sublist-active')
                intervalId = setTimeout(() => {
                    dataAtr.classList.remove('open')
                }, 0)
            }
        })
    })
})

// mobile accordeon
const menus = document.querySelectorAll('.inner-list-m')
menus.forEach(menu => {
    menu.addEventListener('click', menuHandler)
})
function menuHandler(e){
    e.preventDefault();
    let currentMenu = e.target.closest('.inner-list-m')
    if(!currentMenu.classList.contains('active')){
        currentMenu.classList.add('active')
    }else{
        currentMenu.classList.remove('active')
    }
}

// burger-menu
document.querySelector('.burger-menu').addEventListener('click', () => {
    const menu = document.querySelector('.header-mob')
    const burger = document.querySelector('.burger-menu')
    if(!menu.classList.contains('active')){
        menu.classList.add('active')
    }else{
        menu.classList.remove('active')
    }
    if(!burger.classList.contains('opened')){
        burger.classList.add('opened')
    }else{
        burger.classList.remove('opened')
    }
    
})

//click out of the element
document.querySelector('.div').addEventListener( 'click', (e) => {
    const menu = document.querySelector('.header-mob')
	const nav = document.querySelector('.nav')
    const burger = document.querySelector('.burger-menu')
    const sublist = document.querySelectorAll('.sublist')
    sublist.forEach(list => {
        if(list.classList.contains('sublist-active')){
            list.classList.remove('sublist-active')
        }
    })
    if ( menu.classList.contains('active')) {
        menu.classList.remove('active')
    };
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }
    if(burger.classList.contains('opened')){
        burger.classList.remove('opened')
    }
})