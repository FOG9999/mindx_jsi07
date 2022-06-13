window.onload = () => {
    console.log(shopee_data);
    let allProducts = shopee_data.map(item => item.item_basic);
    let renderProduc = (pro) => {
        return `<div class="prod_1 p-1 col-md-3 col-sm-4">
        <div class="item_2">
            <a href="./productpage1.html">
                <img class="image_3"
                    src="${IMAGE_URL}${pro.images[0]}"
                    alt=""></a>
            <br>
            <h4>${pro.name}</h4>
            <br>
            <p>${pro.price}</p>

        </div>
    </div>`
    }
    let container = document.getElementById('list-products');
    let containerHTML = '';
    allProducts.forEach(item => {
        containerHTML += renderProduc(item)
    })
    container.innerHTML = containerHTML;
}