window.onload = () => {
    let appleProducts = shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('iphone'));
    console.log(shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('iphone')));
    let container = document.getElementById('products-container');
    let containerHTML = '';
    let renderProduct = (product) => {
        return `<div class="prod_1">
            <div class="item_2">
                <a href="./productpage1.html">
                    <img class="image_3"
                        src="${IMAGE_URL}${product.item_basic.images[0]}"
                        alt=""></a>
                <br>
                <h4>${product.item_basic.name}</h4>
                <br>
                <p>${product.item_basic.price}</p>

            </div>
        </div>`
    }
    appleProducts.forEach(pro => {
        containerHTML += renderProduct(pro);
    })
    container.innerHTML = containerHTML;
    
}