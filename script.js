function showSurprise() {
    // Tạo trang mới với nội dung đặc biệt
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
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 0;
                padding: 20px;
            }
            .surprise-container {
                background: rgba(255, 255, 255, 0.95);
                padding: 50px;
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                max-width: 500px;
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
            }
            .special-message {
                font-size: 1.5em;
                color: #ff4081;
                background: rgba(255, 105, 180, 0.1);
                padding: 20px;
                border-radius: 15px;
                border: 2px solid #ff69b4;
                margin: 20px 0;
            }
            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            .back-btn {
                background: #ff6b9d;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                font-size: 1em;
                cursor: pointer;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="surprise-container">
            <div class="big-heart">💖</div>
            <div class="message">Bất Ngờ Nè! 🎉</div>
            <div class="special-message">
                "Cậu là người bạn tuyệt vời nhất của tớ ! hihi !"
            </div>
            <button class="back-btn" onclick="window.history.back()">
                ← Quay lại
            </button>
        </div>
    </body>
    </html>
    `;
    
    // Mở trang mới
    const newWindow = window.open('', '_blank');
    newWindow.document.write(newPageContent);
    newWindow.document.close();
}