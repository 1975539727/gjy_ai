let isGameRunning = false;
let score = 0;
let timeLeft = 60;
let gameInterval;
let timerInterval;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const restartBtn = document.getElementById('restart-btn');
const gameOverDiv = document.getElementById('game-over');
const difficultySelect = document.getElementById('difficulty-select');

// 泡泡颜色和分值数组
const bubbleInfo = [
    { color: '#FF5252', score: 1 },
    { color: '#FF4081', score: 2 },
    { color: '#E040FB', score: 3 },
    { color: '#7C4DFF', score: 4 },
    { color: '#536DFE', score: 5 },
    { color: '#448AFF', score: 6 },
    { color: '#40C4FF', score: 7 },
    { color: '#18FFFF', score: 8 },
    { color: '#64FFDA', score: 9 },
    { color: '#69F0AE', score: 10 },
    { color: '#B2FF59', score: 11 },
    { color: '#EEFF41', score: 12 },
    { color: '#FFFF00', score: 13 },
    { color: '#FFD740', score: 14 },
    { color: '#FFAB40', score: 15 },
    { color: '#FF6E40', score: 16 }
];

// 获取难度对应的参数
function getDifficultyParams() {
    const difficulty = difficultySelect.value;
    switch(difficulty) {
        case 'easy':
            return { bubbleInterval: 1200, disappearTime: [4000, 7000] };
        case 'normal':
            return { bubbleInterval: 800, disappearTime: [3000, 6000] };
        case 'hard':
            return { bubbleInterval: 500, disappearTime: [2000, 5000] };
        default:
            return { bubbleInterval: 800, disappearTime: [3000, 6000] };
    }
}

// 创建泡泡
function createBubble() {
    if (!isGameRunning) return;
    
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // 随机大小 (30-80px)
    const size = Math.floor(Math.random() * 50) + 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // 随机位置
    const maxX = gameContainer.clientWidth - size;
    const maxY = gameContainer.clientHeight - size;
    const posX = Math.floor(Math.random() * maxX);
    const posY = Math.floor(Math.random() * maxY);
    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;
    
    // 随机选择泡泡信息
    const infoIndex = Math.floor(Math.random() * bubbleInfo.length);
    const info = bubbleInfo[infoIndex];
    bubble.style.backgroundColor = info.color;
    
    // 点击事件
    bubble.addEventListener('click', () => {
        if (!isGameRunning) return;
        
        // 播放爆破音效
        playPopSound();
        
        // 增加分数
        score += info.score;
        scoreDisplay.textContent = `得分: ${score}`;
        
        // 爆破动画
        bubble.style.transform = 'scale(1.2)';
        bubble.style.opacity = '0';
        
        // 移除泡泡
        setTimeout(() => {
            bubble.remove();
        }, 200);
    });
    
    gameContainer.appendChild(bubble);
    
    // 泡泡自动消失
    const difficultyParams = getDifficultyParams();
    const disappearTime = Math.random() * (difficultyParams.disappearTime[1] - difficultyParams.disappearTime[0]) + difficultyParams.disappearTime[0];
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.style.opacity = '0';
            setTimeout(() => bubble.remove(), 300);
        }
    }, disappearTime);
}

// 播放爆破音效
function playPopSound() {
    const popSound = new Audio();
    popSound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3';
    popSound.play().catch(e => console.log('无法播放音效:', e));
}

// 暂停游戏
function pauseGame() {
    if (!isGameRunning) return;
    
    isGameRunning = false;
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    pauseBtn.textContent = '继续游戏';
}

// 继续游戏
function resumeGame() {
    if (isGameRunning) return;
    
    isGameRunning = true;
    const difficultyParams = getDifficultyParams();
    gameInterval = setInterval(createBubble, difficultyParams.bubbleInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `剩余时间: ${timeLeft}秒`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
    pauseBtn.textContent = '暂停游戏';
}

// 开始游戏
function startGame() {
    if (isGameRunning) return;
    
    // 重置游戏状态
    score = 0;
    timeLeft = 60;
    isGameRunning = true;
    scoreDisplay.textContent = `得分: ${score}`;
    timerDisplay.textContent = `剩余时间: ${timeLeft}秒`;
    gameOverDiv.style.display = 'none';
    
    // 清除所有现有泡泡
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
    
    // 获取难度参数
    const difficultyParams = getDifficultyParams();
    
    // 开始生成泡泡
    gameInterval = setInterval(createBubble, difficultyParams.bubbleInterval);
    
    // 开始倒计时
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `剩余时间: ${timeLeft}秒`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
    
    pauseBtn.style.display = 'inline-block';
    restartBtn.style.display = 'inline-block';
    
    // 开始游戏时禁用难度选择下拉框
    difficultySelect.disabled = true;
}

// 重新开始游戏
function restartGame() {
    endGame();
    // 重新开始时启用难度选择下拉框
    difficultySelect.disabled = false;
    
    // 重置游戏状态
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = `得分: ${score}`;
    timerDisplay.textContent = `剩余时间: ${timeLeft}秒`;
    
    // 清除所有现有泡泡
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
    
    // 隐藏游戏结束界面
    gameOverDiv.style.display = 'none';
    
    // 显示开始按钮，隐藏暂停和重新开始按钮
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    restartBtn.style.display = 'none';
}

// 结束游戏
function endGame() {
    isGameRunning = false;
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    
    // 显示游戏结束界面
    gameOverDiv.style.display = 'block';
    gameOverDiv.querySelector('h2').textContent = '游戏结束！';
    gameOverDiv.querySelector('p').textContent = `你的得分是: ${score}`;
    
    // 隐藏暂停和重新开始按钮
    pauseBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    
    // 启用难度选择下拉框
    difficultySelect.disabled = false;
}

// 添加事件监听器
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', () => {
    if (isGameRunning) {
        pauseGame();
    } else {
        resumeGame();
    }
});
restartBtn.addEventListener('click', restartGame);
gameOverDiv.querySelector('#restart-game-over-btn').addEventListener('click', restartGame);