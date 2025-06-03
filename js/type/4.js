// 枚举类型
const STATUS = {
    // 常量 
    READY: Symbol('ready'),
    RUNNING: Symbol('running'),
    DONE: Symbol('done')
};

let state = STATUS.READY;
if(state === STATUS.READY){
    console.log('ready');
} else if(state === STATUS.RUNNING){
    console.log('运行中');}
