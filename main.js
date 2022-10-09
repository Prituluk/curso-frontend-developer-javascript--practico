const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu_ham_icon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector ('.shopping_cart');
const productDetail = document.querySelector ('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);



function toggleDesktopMenu() {
    const desactiv = productDetail.classList.contains('inactive');
    
    if (desactiv) {
        desktopMenu.classList.toggle('inactive');
    } else {
        productDetail.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }
    
}


function toggleMobileMenu() {
    const desactiv = productDetail.classList.contains('inactive');
    
    

    if (desactiv) {
        mobileMenu.classList.toggle('inactive');
    } else  {
        productDetail.classList.add('inactive');  
        mobileMenu.classList.toggle('inactive');
    }
    
}
function toggleproductDetail() {
    const desactiv = mobileMenu.classList.contains('inactive');
    
    if (desactiv) {
        productDetail.classList.toggle('inactive');
    } else {
        mobileMenu.classList.add ('inactive');
        productDetail.classList.toggle('inactive');
    }
    desktopMenu.classList.add('inactive');
    
}
