* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Quicksand', sans-serif;
    background: linear-gradient(135deg, #ffb6c1, #ff69b4, #ff1493);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 20px;
}

/* Hiệu ứng rơi hoa */
#flowerRain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.flower {
    position: absolute;
    font-size: 20px;
    animation: fall linear forwards;
    opacity: 0.8;
}

@keyframes fall {
    0% {
        transform: translateY(-50px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.8;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.container {
    text-align: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
}

/* Trái tim bên trái */
.heart-left {
    font-size: 80px;
    animation: shakeLeft 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
    flex-shrink: 0;
    margin-right: 20px;
}

/* Trái tim bên phải */
.heart-right {
    font-size: 80px;
    animation: shakeRight 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
    flex-shrink: 0;
    margin-left: 20px;
}

/* Hiệu ứng lắc bên trái */
@keyframes shakeLeft {
    0%, 100% { 
        transform: translateX(0) rotate(0deg); 
    }
    25% { 
        transform: translateX(-15px) rotate(-8deg); 
    }
    50% { 
        transform: translateX(0) rotate(0deg); 
    }
    75% { 
        transform: translateX(-10px) rotate(-5deg); 
    }
}

/* Hiệu ứng lắc bên phải */
@keyframes shakeRight {
    0%, 100% { 
        transform: translateX(0) rotate(0deg); 
    }
    25% { 
        transform: translateX(15px) rotate(8deg); 
    }
    50% { 
        transform: translateX(0) rotate(0deg); 
    }
    75% { 
        transform: translateX(10px) rotate(5deg); 
    }
}

.main-message {
    background: rgba(255, 255, 255, 0.98);
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border: 3px solid rgba(255, 255, 255, 0.8);
    flex: 1;
    z-index: 2;
}

.main-title {
    font-family: 'Dancing Script', cursive;
    font-size: 3em;
    color: #e91e63;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 1.2;
}

.main-greeting {
    font-size: 1.5em;
    color: #ff4081;
    margin-bottom: 25px;
    font-weight: 700;
}

.message-container {
    position: relative;
    min-height: 200px;
    margin: 25px 0;
}

.message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
    pointer-events: none;
}

.message.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    cursor: pointer;
}

.message p {
    padding: 15px 20px;
    font-size: 1.3em;
    color: #d5006d;
    margin: 8px 0;
    background: rgba(255, 105, 180, 0.1);
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.message.active p:hover {
    background: rgba(255, 105, 180, 0.2);
    border-color: #ff69b4;
    transform: scale(1.05);
}

/* Nút nhấn vào đây */
.surprise-btn {
    background: linear-gradient(45deg, #ff6b9d, #ff8eb4);
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.3em;
    border-radius: 50px;
    cursor: pointer;
    margin: 25px 0;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 107, 157, 0.4);
    font-weight: bold;
    display: block;
    width: 100%;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
}

.surprise-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.6);
    background: linear-gradient(45deg, #ff8eb4, #ff6b9d);
}

/* Hiệu ứng nền */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 2%, transparent 5%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 2%, transparent 5%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.2) 3%, transparent 8%);
    animation: sparkle 4s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
}

@keyframes sparkle {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 20px;
    }
    .heart-left, .heart-right {
        font-size: 60px;
        margin: 0;
    }
    .main-message {
        width: 100%;
        padding: 30px 20px;
    }
    .main-title { 
        font-size: 2.5em; 
    }
    .main-greeting { 
        font-size: 1.3em; 
    }
    .message p { 
        font-size: 1.1em; 
    }
    .surprise-btn {
        font-size: 1.1em;
        padding: 12px 25px;
    }
}

@media (max-width: 480px) {
    .heart-left, .heart-right {
        font-size: 50px;
    }
    .main-title {
        font-size: 2em;
    }
    .flower {
        font-size: 16px;
    }
}
