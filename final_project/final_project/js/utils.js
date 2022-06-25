
// hàm dùng chung cho các search bar treenc ác trang
/**
 * 
 * @param {*} key từ khóa tìm kiếm
 * @param {*} category chủng loại trên trang hiện tại, nếu trang hiện tại mà là trang chủ thì truyền '' hoặc không truyền j cả
 * @returns 
 */
function search(key, category){
    // use regex to search -> search template in js
    let regexKey = new RegExp(key, 'i'); // i: ignore case, g: global . Link tham khao: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    let regexCategory = new RegExp(category, 'i');
    let searchResult = shopee_data.filter((pro) => {
        if(regexKey.test(pro.item_basic.name) && regexCategory.test(pro.item_basic.name)){
            return true;
        }
    })
    return searchResult;
}