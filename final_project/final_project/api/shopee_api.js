window.onload = () => {
    console.log(shopee_data.filter(item => item.item_basic.name.toLowerCase().includes('samsung')));
}