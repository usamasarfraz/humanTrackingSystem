import resetPasswordService from '../../services/resetPasswordServices/resetPasswordService';
const initialState = {
    email: '',
    phone: '',
    phoneCheck: false,
    emailCheck: false,
    token: ''
}
const resetPasswordReducer = (state = initialState,action)=>{
    let currentState = null;
        switch(action.type){
            case 'RESET_REQUEST':
            resetPasswordService.sendResetRequest(action.data,action.navigation);
            return action.data;
            case 'EMAIL_RESPONSE_RECIEVE':
            currentState = state;
            currentState.email = action.email;
            return currentState;
            case 'PHONE_RESPONSE_RECIEVE':
            currentState = state;
            currentState.phone = action.phone;
            return currentState;
            default:
            return state;
        }
}
export default resetPasswordReducer;