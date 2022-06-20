var add_to_cart_btns = document.getElementsByClassName('add-shop')
var main_container = document.getElementsByTagName('tbody')[0]
var quantity_fields = document.getElementsByClassName('num')
var removeBtns = document.getElementsByClassName('uk-button-danger')
var el = document.querySelectorAll('ion-icon')


for (var i = 0 ; i<add_to_cart_btns.length;i++){
    add_to_cart_btns[i].addEventListener('click',addToCart)
}

function addToCart(event){
    var btn = event.target
    btnGrandparent = btn.parentElement.parentElement;

    var itemName = btnGrandparent.children[2].innerText
    var itemPrice = btnGrandparent.children[4].innerText
    var itemImage = btnGrandparent.children[0].children[0].src

    var itemContainer = document.createElement('tr')
    itemContainer.innerHTML = ` <table> <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src="${itemImage}" width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td> </table>`

    main_container.append(itemContainer)

    for (var i = 0 ; i<quantity_fields.length;i++){
        quantity_fields[i].addEventListener('click',updateTotal)
    }
}

    function updateTotal(event){
        number_of_items = event.target
        number_of_items_parent =  number_of_items.parentElement.parentElement
        price_field = number_of_items_parent.getElementsByClassName('item-price')[0]
        total_field = number_of_items_parent.getElementsByClassName('total-price')[0]
        price_field_content = price_field.children[0].innerText.replace('$', '')
        total_field.children[0].innerText = number_of_items.value * price_field_content +' $'
    
        if(isNaN(number_of_items.value)|| number_of_items.value <= 0){
            number_of_items.value = 1
        }

        
        for (var i = 0 ; i< removeBtns.length;i++){
        removeBtns[i].addEventListener('click', removeItem)
        }
        grandTotal()
    }

    function grandTotal(){
        var total = 0
        var grand_total = document.getElementsByClassName('grand-total')[0]
        var total_price = document.getElementsByClassName('total-price')
        for(var i = 0; i < total_price.length; i++){
            total_price_content = Number(total_price[i].innerText.replace('$', ''))
            total+=total_price_content
        }
        grand_total.children[0].innerText =  total + " $"
        console.log(total)
    }

    function removeItem(event){
        remove_btn = event.target
        remove_btn_grandparent = remove_btn.parentElement.parentElement
        remove_btn_grandparent.remove()
        console.log(remove_btn)
        grandTotal()
        
    }
    
function changeColor(l) {

          if (l.style.color == "black") {
    l.style.color = "red";
  } else {
    l.style.color = "black";
  }
    
    }


    for (var i = 0 ; i<el.length;i++){
    el[i].addEventListener('click',(e)=>changeColor(e.target));

   
     }
  

    
   


   