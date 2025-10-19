// Hiệu ứng rơi hoa
function createFlowerRain() {
    const flowerRain = document.getElementById('flowerRain');
    const flowers = ['🌸', '🌺', '🌷', '💐', '🌼', '🌹', '🥀', '🌻'];
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        
        const startPosition = Math.random() * window.innerWidth;
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        flower.style.left = startPosition + 'px';
        flower.style.animationDuration = duration + 's';
        flower.style.animationDelay = delay + 's';
        
        flowerRain.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, (duration + delay) * 1000);
    }
    
    setInterval(createFlower, 300);
    
    for (let i = 0; i < 10; i++) {
        setTimeout(createFlower, i * 100);
    }
}

// Chuyển đổi giữa các phần
let currentSection = 1;
const totalSections = 6;

function initClickEvents() {
    // Thêm sự kiện click cho phần đầu tiên
    const greetingElement = document.querySelector('.main-greeting');
    const wishElements = document.querySelectorAll('.wish-text');
    
    if (greetingElement) {
        greetingElement.addEventListener('click', nextSection);
    }
    
    wishElements.forEach(element => {
        element.addEventListener('click', nextSection);
    });
}

function nextSection() {
    // Ẩn phần hiện tại
    const currentElement = document.getElementById(`section${currentSection}`);
    currentElement.classList.remove('active');
    
    // Chuyển đến phần tiếp theo
    currentSection++;
    
    if (currentSection <= totalSections) {
        setTimeout(() => {
            const nextElement = document.getElementById(`section${currentSection}`);
            nextElement.classList.add('active');
        }, 300);
    }
}

// Hiển thị trang bất ngờ
function showSurprise() {
    const newPageContent = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bất Ngờ Nè!</title>
        <style>
            body {
                background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Quicksand', sans-serif;
                text-align: center;
                margin: 0;
                padding: 20px;
                overflow: hidden;
            }
            .surprise-container {
                background: rgba(255, 255, 255, 0.95);
                padding: 50px;
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                max-width: 500px;
                border: 3px solid #ff69b4;
            }
            .big-heart {
                font-size: 100px;
                animation: bounce 1s infinite;
                margin-bottom: 20px;
            }
            .message {
                font-size: 2em;
                color: #e91e63;
                font-weight: bold;
                margin: 20px 0;
                font-family: 'Dancing Script', cursive;
            }
            .special-message {
                font-size: 1.5em;
                color: #ff4081;
                background: rgba(255, 105, 180, 0.1);
                padding: 20px;
                border-radius: 15px;
                border: 2px solid #ff69b4;
                margin: 20px 0;
                font-weight: 600;
            }
            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            .back-btn {
                background: linear-gradient(45deg, #ff6b9d, #ff8eb4);
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 25px;
                font-size: 1em;
                cursor: pointer;
                margin-top: 20px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            .back-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(255, 107, 157, 0.4);
            }
        </style>
    </head>
    <body>
        <div class="surprise-container">
            <div class="big-heart">💖</div>
            <div class="message">Bất Ngờ Nè! 🎉</div>
            <div class="special-message">
                "Cậu là người bạn thân nhất của tớ!"
            </div>
            <button class="back-btn" onclick="window.history.back()">
                ← Quay lại
            </button>
        </div>
    </body>
    </html>
    `;
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(newPageContent);
    newWindow.document.close();
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    createFlowerRain();
    initClickEvents();
});
