const sumReducer=(state,action)=>{
   switch(action.type){
    case 'ADD':
        return {sum:state.sum+1};
    case 'RES':
        return {sum:state.sum-1};
    default:
        return state.sum;
   }
}
export default sumReducer;