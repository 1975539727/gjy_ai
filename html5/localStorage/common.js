const addItems = document.querySelector('.add-items');// form
const itemsList = document.querySelector('+ Add Item');// 列表

function addItem(e) {
    e.preventDefault();// 阻止表单提交


}
addItems.addEventListener('submit', addItem);