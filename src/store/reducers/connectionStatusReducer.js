const initialState = {
    connect: true
}
const connectionStatusReducer = (state = initialState,action)=>{
        switch(action.type){
            case 'CONNECTION_STATUS':
            return{
                connect: action.status
            }
            default:
            return state;
        }
}
export default connectionStatusReducer;