window.onload = () => {
    let oppoProducts = shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('oppo'));
    console.log(shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('oppo')));
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
    oppoProducts.forEach(pro => {
        containerHTML += renderProduct(pro);
    })
    container.innerHTML = containerHTML;
    
}