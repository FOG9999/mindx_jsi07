const product = shopee_data[0].item_basic;

window.onload = () => {
    document.getElementById('product_name').innerHTML = product.name;
    document.getElementById('product_price').innerHTML = product.price;
    document.getElementById('sold_items').innerHTML = product.sold;
}