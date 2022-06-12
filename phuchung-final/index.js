// kích cỡ của bảng nxn
const n = 8;
const table = document.getElementById('table-container');
let tableData = new Map();

// tạo bảng
const initTable = () => {
    let tableContent = "";
    // loop qua các hàng
    for(let i=0; i<n; i++){
        tableContent += "<tr>";
        for(let j=0; j<n; j++){
            // thêm ô vào dòng hiện tại
            tableContent += `<td id='${i+1}.${j+1}'></td>`
        }
        tableContent += '</tr>';
    }
    table.innerHTML = tableContent;
}

// generate data cho table
const generateDataForTable = () => {
    let mapData = new Map();
    // map với key value dạng key: <hàng>.<cột>
    for(let i=1; i<=n; i++){        
        for(let j=1; j<=n; j++){
            let currentKey = `${i}.`; // string template -> cho phép viết tên biến trong một chuỗi string mà không cần sử dụng tới + string
            currentKey += j; // key: i.j
            // ô có bom là ô có giá trị là -1, ô không có sẽ có giá trị là 1
            let dataCell = Math.random() > 0.5 ? 1 : -1;
            mapData.set(currentKey, dataCell);
        }

    }
    return mapData;
}

// thêm sự kiện click cho các ô của bảng
const addEvtForCell = (rowIndex, columnIndex) => {
    let currentCell = document.getElementById(`${rowIndex}.${columnIndex}`);
    currentCell.addEventListener('click', () => {
        console.log(tableData.get(`${rowIndex}.${columnIndex}`));
        currentCell.style.backgroundColor = 'white';
        checkIfGameOver(rowIndex, columnIndex, currentCell);
    })
}

// loop qua từng phần tử trong bảng để add sự kiện click ở trên
const addEvtForTable = () => {
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            addEvtForCell(i, j);
        }
    }
}

const countBomNearBy = (rowIndex, columnIndex, cellElement) => {
    // đếm số bom xung quanh hay ô có giá trị là -1
    let count = 0;
    // check xem trong table data có lưu giá trị này hay không, nếu không thì ô đang click đang ở ngoài table
    if(tableData.get(`${rowIndex-1}.${columnIndex-1}`)){
        if(tableData.get(`${rowIndex-1}.${columnIndex-1}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex-1}.${columnIndex}`)){
        if(tableData.get(`${rowIndex-1}.${columnIndex}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex-1}.${columnIndex+1}`)){
        if(tableData.get(`${rowIndex-1}.${columnIndex+1}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex}.${columnIndex-1}`)){
        if(tableData.get(`${rowIndex}.${columnIndex-1}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex}.${columnIndex+1}`)){
        if(tableData.get(`${rowIndex}.${columnIndex+1}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex+1}.${columnIndex}`)){
        if(tableData.get(`${rowIndex+1}.${columnIndex}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex+1}.${columnIndex-1}`)){
        if(tableData.get(`${rowIndex+1}.${columnIndex-1}`) === -1){
            count ++;
        }
    }
    if(tableData.get(`${rowIndex+1}.${columnIndex+1}`)){
        if(tableData.get(`${rowIndex+1}.${columnIndex+1}`) === -1){
            count ++;
        }
    }
    cellElement.innerHTML = count;
}

const checkIfGameOver = (rowIndex, columnIndex, cellElement) => {
    let data = tableData.get(`${rowIndex}.${columnIndex}`);
    if(data === -1){
        console.log('Game over')
    }
    else {
        // check xem xung quanh có bao nhiêu bom 
        countBomNearBy(rowIndex, columnIndex, cellElement)
    }
}

tableData = generateDataForTable();
console.log(tableData)
initTable();
addEvtForTable();
