function nextPage() {
    // Chuyển sang trang 2
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    
    // Bắt đầu hiệu ứng lời chúc
    setTimeout(startWishesAnimation, 1000);
}

function startWishesAnimation() {
    const wishes = [
        'wish1', 'wish2', 'wish3', 'wish4', 'wish5'
    ];
    
    // Hiện lần lượt các lời chúc
    wishes.forEach((wishId, index) => {
        const wish = document.getElementById(wishId);
        
        // Hiện lời chúc
        setTimeout(() => {
            wish.style.animation = 'wishAppear 0.5s ease-in forwards';
        }, index * 1500);
        
        // Ẩn lời chúc sau 1 giây
        setTimeout(() => {
            wish.style.animation = 'wishDisappear 0.5s ease-out forwards';
        }, index * 1500 + 1000);
    });
    
    // Hiện nút "Nhấn vào đây" sau khi tất cả lời chúc biến mất
    setTimeout(() => {
        document.getElementById('finalMessage').style.display = 'block';
        document.getElementById('finalMessage').style.animation = 'fadeIn 0.8s ease-in forwards';
    }, wishes.length * 1500 + 500);
}

function showFinalMessage() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "Cậu là người bạn tuyệt vời nhất của tớ! 💝";
    finalMessage.style.background = 'linear-gradient(45deg, #ff6b9d, #ff8eb4)';
    finalMessage.style.color = 'white';
    finalMessage.style.cursor = 'default';
    
    // Tạo hiệu ứng hoa rơi
    createFlowers();
}

function createFlowers() {
    const flowers = ['🌸', '💮', '🏵️', '💐', '🌹', '🌺', '🌷'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
            flower.style.fontSize = (Math.random() * 20 + 20) + 'px';
            
            document.body.appendChild(flower);
            
            // Tự động xóa sau 5 giây
            setTimeout(() => {
                if (flower.parentNode) {
                    flower.remove();
                }
            }, 5000);
        }, i * 200);
    }
}

// Thêm CSS animation cho việc ẩn lời chúc
const style = document.createElement('style');
style.textContent = `
    @keyframes wishDisappear {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
