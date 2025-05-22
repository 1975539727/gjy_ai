/**
 * @desc 页面背景切换
 * @author gjy
 * @date 2024-05-10 16:39:04
 */
// JS面向对象 语言
// 事件监听
// 弹窗加载完后 
document.addEventListener('DOMContentLoaded', function() {
    //获取按钮元素
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function() {
        // completion
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "changeBackgroundColor", color: "green"});
        });
    });
});