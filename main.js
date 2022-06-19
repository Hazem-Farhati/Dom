let shops = document.querySelectorAll('.add-shop');

let products = [
    {
    name: 'Climatiseur' ,
    prix: 700 ,
    inShop :  0 
   },
   {
    name: 'smartv' ,
    prix: 500 ,
    inShop :  0 

   },
   {
    name: 'machin' ,
    prix: 900 ,
    inShop :  0 

   },



];
for(let i=0; i<shops.length;i++){
    shops[i].addEventListener('click',() => {
        shopNumbers(products[i]);
        totalCost(products[i])
    })
}
    function onLoadShopNumbers(){
    let productNumbers = localStorage.getItem('shopNumbers');
    if(productNumbers){
        document.querySelector('.shop span').textContent= productNumbers;
    }
}
function shopNumbers(product){
    let productNumbers =localStorage.getItem('shopNumbers');
    productNumbers=parseInt(productNumbers);
 
    if(productNumbers){
        localStorage.setItem('shopNumbers',productNumbers + 1);
        document.querySelector('.shop span').textContent = productNumbers + 1;

    }
    else{
        localStorage.setItem('shopNumbers',1);
        document.querySelector('.shop span').textContent = 1;
    }

setItem(product);
    }
    function setItem(product){
        let shopItems= localStorage.getItem('productsInShop');
        shopItems = JSON.parse(shopItems);
        if(shopItems != null){
            if(shopItems[product.name] == undefined){
                shopItems = {
                    ...shopItems,
                    [product.name]:product
                }
            }
        }
        else {
            product.inShop = 1 ; 
            shopItems = {
                [product.name]: product
            }
        }
      
        localStorage.setItem("productsInShop", JSON.stringify
        (shopItems));
    }

    function totalCost(product){
        // console.log("the procut price is ",product.prix);
        localStorage.setItem("totalCost",product.prix);
        var shopCost= localStorage.getItem('totalCost');
        console.log("my shopCost is ",shopCost);
        console.log(typeof shopCost)
        if(shopCost != null){
            shopCost = parseInt(shopCost);
            localStorage.setItem("totalCost",shopCost + product.prix);
        }
        else{
            localStorage.setItem("totalCost",product.prix);
        }
    }

    function displayShop(){
        var shopItems = localStorage.getItem("productsInShop");
        var shopCost= localStorage.getItem('totalCost');

        shopItems = JSON.parse(shopItems);
        var procutContainer = document.querySelector
        (".product");
        console.log(shopItems);

        if (shopItems && procutContainer){
            procutContainer.innerHTML = '' ;
            Object.values(shopItems).map(item => {
                procutContainer.innerHTML += `
                <div class="product">
            <img src="./image/${item.name}.jpg">
            <ion-icon name="close-circle-outline"></ion-icon>
            
            <div class="price"> ${item.prix},00</div>
            <div class="quantity">
            <ion-icon name="caret-back-outline"></ion-icon>
            <span>${item.inShop}</span>
            <ion-icon name="caret-forward-outline"></ion-icon>
            </div>

                <div class="total">
                ${item.inShop * item.prix},00
                </div>
                `;
               
                
            });
            procutContainer.innerHTML += `
            <div class="totale_container">
            <h4 class="basket_totaltitle">
            basket total </h4>
            <h4 class="baskettotal">
            $${shopCost},00
            </h4>
            
            `

        }
    }

    var el = document.querySelectorAll('ion-icon');

 

      function changeColor() {
        el.style.color = 'red';
    }
    el.addEventListener('click',changeColor());

    displayShop();
    onLoadShopNumbers();
  

