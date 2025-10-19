document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.message');
    const toggleBtn = document.getElementById('toggleBtn');
    let currentMessage = 0;
    
    // Hàm chuyển đổi giữa các lời chúc
    function toggleMessage() {
        // Ẩn lời chúc hiện tại
        messages[currentMessage].classList.remove('active');
        
        // Chuyển sang lời chúc tiếp theo
        currentMessage = (currentMessage + 1) % messages.length;
        
        // Hiển thị lời chúc mới
        messages[currentMessage].classList.add('active');
        
        // Cập nhật nút
        if (currentMessage === messages.length - 1) {
            toggleBtn.textContent = 'Quay lại lời chúc đầu';
        } else {
            toggleBtn.textContent = 'Xem lời chúc tiếp theo';
        }
    }
    
    // Thêm sự kiện click cho nút
    toggleBtn.addEventListener('click', toggleMessage);
    
    // Tự động chuyển đổi sau mỗi 5 giây
    setInterval(toggleMessage, 5000);
});
