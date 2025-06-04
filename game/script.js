// 游戏数据
const gameData = {
    currentStage: 0, // 0: 春季, 1: 夏季, 2: 秋季, 3: 冬季
    currentLevel: 1,
    stages: [
        {
            name: '春季',
            background: 'spring-bg.jpg',
            sound: 'spring-audio'
        },
        {
            name: '夏季',
            background: 'summer-bg.jpg',
            sound: 'summer-audio'
        },
        {
            name: '秋季',
            background: 'autumn-bg.jpg',
            sound: 'autumn-audio'
        },
        {
            name: '冬季',
            background: 'winter-bg.jpg',
            sound: 'winter-audio'
        }
    ],
    levels: Array.from({ length: 4 }, () => 
        Array.from({ length: 5 }, (_, index) => ({
            number: index + 1,
            difficulty: index + 1
        }))
    )
};

// DOM 元素
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const stageInfo = document.getElementById('stage-info');
const levelInfo = document.getElementById('level-info');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const actionBtn = document.getElementById('action-btn');

// 初始化画布
function initCanvas() {
    canvas.width = 800;
    canvas.height = 600;
}

// 更新游戏信息
function updateGameInfo() {
    stageInfo.textContent = `当前阶段: ${gameData.stages[gameData.currentStage].name}`;
    levelInfo.textContent = `当前关卡: ${gameData.currentLevel}`;
}

// 加载角色模型
function loadCharacterModel() {
    const character = new Image();
    character.src = '/d:/lesson_si/game/人物主角模型.png';
    character.onload = () => {
        // 角色加载完成后绘制到画布
        ctx.drawImage(character, 100, 100);
    };
}

// 初始化游戏
function initGame() {
    initCanvas();
    updateGameInfo();
    loadCharacterModel();
    // 播放对应阶段的音效
    const audio = document.getElementById(gameData.stages[gameData.currentStage].sound);
    audio.play();
}

// 按钮事件监听
leftBtn.addEventListener('click', () => {
    // 左移逻辑
});

rightBtn.addEventListener('click', () => {
    // 右移逻辑
});

actionBtn.addEventListener('click', () => {
    // 行动逻辑
});

// 启动游戏
initGame();