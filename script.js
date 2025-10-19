const messages = [
    "Luôn xinh đẹp và rạng rỡ",
    "Mãi là tri kỷ của nhau", 
    "Thành công trong học tập",
    "Hạnh phúc tràn đầy",
    "Luôn vui vẻ và mạnh khỏe",
    "Nhấn vào đây"
];

let currentMessageIndex = 0;

function nextPage() {
    // Chuyển sang trang 2
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    
    // Bắt đầu hiển thị các lời chúc
    showNextMessage();
}

function showNextMessage() {
    const messageElement = document.getElementById('message');
    
    if (currentMessageIndex < messages.length - 1) {
        // Hiện lời chúc
        messageElement.textContent = messages[currentMessageIndex];
        messageElement.style.animation = 'none';
        void messageElement.offsetWidth; // Reset animation
        messageElement.style.animation = 'messageFade 2s ease-in-out';
        
        currentMessageIndex++;
        
        // Tự động chuyển sang lời chúc tiếp theo sau 2 giây
        setTimeout(showNextMessage, 2000);
    } else {
        // Hiện nút "Nhấn vào đây"
        messageElement.textContent = messages[currentMessageIndex];
        messageElement.style.animation = 'none';
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
        messageElement.style.cursor = 'pointer';
        messageElement.onclick = showFinalMessage;
    }
}

function showFinalMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = "Cậu là người bạn tuyệt vời nhất của tớ! 💝";
    messageElement.style.background = 'linear-gradient(45deg, #ff6b9d, #ff8eb4)';
    messageElement.style.color = 'white';
    messageElement.style.cursor = 'default';
    messageElement.onclick = null;
    
    // Tạo hiệu ứng trái tim bay
    createHearts();
}

function createHearts() {
    const hearts = ['💖', '💝', '💗', '💓', '💞'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.animation = 'flyUp 3s linear forwards';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 3000);
        }, i * 150);
    }
}

// Thêm CSS cho hiệu ứng trái tim bay
const style = document.createElement('style');
style.textContent = `
    @keyframes flyUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
