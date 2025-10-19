document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang đã tải xong');
    
    const messages = document.querySelectorAll('.message');
    const toggleBtn = document.getElementById('toggleBtn');
    
    console.log('Tìm thấy', messages.length, 'message');
    console.log('Tìm thấy nút:', toggleBtn ? 'Có' : 'Không');
    
    let currentMessage = 0;
    
    function showNextMessage() {
        // Ẩn tất cả messages
        messages.forEach(msg => {
            msg.classList.remove('active');
        });
        
        // Hiển thị message tiếp theo
        currentMessage = (currentMessage + 1) % messages.length;
        messages[currentMessage].classList.add('active');
        
        // Cập nhật text nút
        if (toggleBtn) {
            toggleBtn.textContent = currentMessage === messages.length - 1 
                ? 'Quay lại lời chúc đầu' 
                : 'Xem lời chúc tiếp theo';
        }
    }
    
    // Sự kiện click nút
    if (toggleBtn) {
        toggleBtn.addEventListener('click', showNextMessage);
    }
    
    // Tự động chuyển mỗi 5 giây
    setInterval(showNextMessage, 5000);
});
