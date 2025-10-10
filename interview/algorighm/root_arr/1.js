function TreeNode(val,left=null,right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function largestValuesPerLevel(root){
    if(!root) return [0];
    const res =[];
    const queue = [root]; // FIFO bfs  队列
    while(queue.length){ // 每次清空队列,代表一层   
        let max = Number.NEGATIVE_INFINITY
        for(let i=0;i<queue.length;i++){
            const node = queue.shift(); // 出队 
            max = Math.max(max,node.val); // 取最大值
            if (node.left) queue.push(node.left); // 入队
            if (node.right) queue.push(node.right); 
        }
        res.push(max === Number.NEGATIVE_INFINITY ? 0 : max)
    }
    return res; 
}