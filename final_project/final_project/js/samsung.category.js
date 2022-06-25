let renderProduct = (product) => {
    return `<div class="prod_1">
        <div class="item_2">
            <a href="./productpage1.html" class="product-link">
                <img class="image_3"
                    src="${IMAGE_URL}${product.item_basic.images[0]}"
                    alt=""></a>
            <br>
            <h6>${product.item_basic.name}</h6>
            <br>
            <p>${product.item_basic.price}</p>

        </div>
    </div>`
}


function onSearch(){
    let key = document.getElementById('search-input').value;
    let searchResult = search(key, 'samsung');
    let container = document.getElementById('products-container');
    let containerHTML = '';
    
    searchResult.forEach(pro => {
        containerHTML += renderProduct(pro);
    })
    container.innerHTML = containerHTML;
}

window.onload = () => {
    let samsungProducts = shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('samsung'));
    console.log(shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('samsung')));
    let container = document.getElementById('products-container');
    let containerHTML = '';
    
    samsungProducts.forEach(pro => {
        containerHTML += renderProduct(pro);
    })
    container.innerHTML = containerHTML;
    
}
console.log(parseInt(product.item_basic.price))