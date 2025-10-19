document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.message');
    const toggleBtn = document.getElementById('toggleBtn');
    let currentMessage = 0;
    let autoChangeInterval;
    
    console.log('Số lượng message:', messages.length); // Debug
    
    // Hàm chuyển đổi giữa các lời chúc
    function toggleMessage() {
        if (messages.length === 0) return;
        
        console.log('Đang chuyển từ message:', currentMessage); // Debug
        
        // Ẩn lời chúc hiện tại
        messages[currentMessage].classList.remove('active');
        
        // Chuyển sang lời chúc tiếp theo
        currentMessage = (currentMessage + 1) % messages.length;
        
        // Hiển thị lời chúc mới
        messages[currentMessage].classList.add('active');
        
        console.log('Đã chuyển đến message:', currentMessage); // Debug
        
        // Cập nhật nút
        updateButtonText();
    }
    
    // Cập nhật text cho nút
    function updateButtonText() {
        if (toggleBtn) {
            if (currentMessage === messages.length - 1) {
                toggleBtn.textContent = 'Quay lại lời chúc đầu';
            } else {
                toggleBtn.textContent = 'Xem lời chúc tiếp theo';
            }
        }
    }
    
    // Khởi tạo
    function init() {
        console.log('Khởi tạo...'); // Debug
        
        // Đảm bảo chỉ có một message active ban đầu
        messages.forEach((message, index) => {
            if (index === 0) {
                message.classList.add('active');
            } else {
                message.classList.remove('active');
            }
        });
        
        // Thêm sự kiện click cho nút
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleMessage);
            console.log('Đã thêm sự kiện click'); // Debug
        } else {
            console.log('Không tìm thấy nút toggleBtn'); // Debug
        }
        
        // Dừng interval cũ nếu có
        if (autoChangeInterval) {
            clearInterval(autoChangeInterval);
        }
        
        // Tự động chuyển đổi sau mỗi 5 giây
        autoChangeInterval = setInterval(toggleMessage, 5000);
        console.log('Đã bật tự động chuyển đổi'); // Debug
        
        updateButtonText();
    }
    
    // Chạy khởi tạo
    init();
});
