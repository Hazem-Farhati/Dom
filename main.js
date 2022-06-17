let shops = document.querySelectorAll('.add-shop');

let products = [
    {
    name: 'Climatiseur' ,
    prix: 700 ,
    inShop :  0 
   },
   {
    name: 'SMART TV' ,
    prix: 500 ,
    inShop :  0 

   },
   {
    name: 'machine a laver' ,
    prix: 900 ,
    inShop :  0 

   },



];
for(let i=0; i<shops.length;i++){
    shops[i].addEventListener('click',() => {
        shopNumbers(products[i]);
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
            shopItems[product.name].inShop += 1;
        }
        else {
            product.inShop = 1 ; 
            shopItems = {
                [product.name]: product
            }
        }
        console.log("my shopItems are",shopItems);
        product.inShop = 1 ;
         shopItems = {
            [product.name]: product
        }
        localStorage.setItem("productsInShop", JSON.stringify
        (shopItems));
    }
    onLoadShopNumbers();

