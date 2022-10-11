const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu_ham_icon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector ('.shopping_cart');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const closeProductDetailIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);
closeProductDetailIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const desactiv = shoppingCartContainer.classList.contains('inactive');
    
    
    if (desactiv) {
        desktopMenu.classList.toggle('inactive');
    } else {
        shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }
    
    
}


function toggleMobileMenu() {
    const desactiv = shoppingCartContainer.classList.contains('inactive');
    
    

    if (desactiv) {
        mobileMenu.classList.toggle('inactive');
    } else  {
        shoppingCartContainer.classList.add('inactive');  
        mobileMenu.classList.toggle('inactive');
    }
    
}
function toggleproductDetail() {
    const desactiv = mobileMenu.classList.contains('inactive');
    
    if (desactiv) {
        shoppingCartContainer.classList.toggle('inactive');
    } else {
        mobileMenu.classList.add ('inactive');
        shoppingCartContainer.classList.toggle('inactive');
    }

    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function openProductDetailAside(){
    const sobrepone = productDetailContainer.classList.contains('inactive');
    const sobreponer = desktopMenu.classList.contains('inactive');
    if(sobrepone) {
        desktopMenu.classList.add('top');
    }

    if(!sobreponer) {
        desktopMenu.classList.add('inactive','top');
        
      }

    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');

    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 
productList.push({
    name: 'computadora',
    price: 500,
    image: 'https://www.unidiversidad.com.ar/cache/pc_1000_1100.jpg',
});
productList.push({
    name: 'celular',
    price: 300,
    image: 'https://www.infobae.com/new-resizer/BRHJmWCX000uc5OrLz6F70GDEds=/768x341/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/KVPOVMTXVJDYLDUKF54KKPIG5I.webp',
});

for (product of productList) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);
   productImg.addEventListener('click', openProductDetailAside);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}