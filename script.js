document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.message');
    let currentMessage = 0;
    
    function changeMessage() {
        // Ẩn message hiện tại
        messages[currentMessage].classList.remove('active');
        
        // Chuyển đến message tiếp theo
        currentMessage = (currentMessage + 1) % messages.length;
        
        // Hiển thị message mới
        messages[currentMessage].classList.add('active');
    }
    
    // Tự động chuyển đổi mỗi 2 giây
    setInterval(changeMessage, 2000);
});
