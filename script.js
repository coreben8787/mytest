document.addEventListener('DOMContentLoaded', function() {  
    // 获取所有的"申请售后"链接  
    var afterSaleLinks = document.querySelectorAll('.after-sale');  
  
    // 对每个链接添加点击事件监听器  
    afterSaleLinks.forEach(function(link) {  
        link.addEventListener('click', function(event) {  
            // 阻止链接的默认行为（即跳转到href指定的URL）  
            event.preventDefault();  
  
            // 弹出确认框  
            if (confirm('确认申请售后吗？')) {  
                // 如果用户点击了"确定"，执行一些操作（比如发送AJAX请求到服务器）  
                console.log('用户已确认申请售后');  
                // 这里可以添加你的代码来处理售后申请  
            } else {  
                // 如果用户点击了"取消"，则不执行任何操作  
                console.log('用户已取消申请售后');  
            }  
        });  
    });  
});
