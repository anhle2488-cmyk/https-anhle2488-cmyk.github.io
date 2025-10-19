function nextPage() {
    // Ẩn trang 1, hiện trang 2
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    
    // Hiện nút "Nhấn vào đây" sau khi lời chúc kết thúc
    setTimeout(() => {
        document.querySelector('.final-message').style.display = 'block';
    }, 8000); // 8 giây sau khi lời chúc cuối cùng biến mất
}

function showFinalMessage() {
    const finalMessage = document.querySelector('.final-message');
    finalMessage.innerHTML = "Cậu là người bạn tuyệt vời nhất của tớ! 💝";
    finalMessage.style.background = 'linear-gradient(45deg, #ff6b9d, #ff8eb4)';
    finalMessage.style.color = 'white';
    finalMessage.style.cursor = 'default';
    
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
