import userService from '../../services/userServices/userService';
const initialState = {
    token: '',
    check: false,
    emailVerified: false,
    username: '',
    email: '',
    password: '',
    contact: '',
    resp: false
}
const userReducer = (state = initialState,action)=>{
        switch(action.type){
            case 'REGISTER_USER':
            let data = action.data;
            data.check = state.check;
            data.emailVerified = state.emailVerified;
            userService.registerUser(data,action.navigation);
            return {
                token: action.data.token,
                check: state.check,
                username: action.data.username,
                email: action.data.email,
                password: action.data.password,
                contact: action.data.contact,
                resp: true,
                emailVerified: state.emailVerified
            };
            case 'Login_USER':
            userService.loginUser(action.data,action.navigation);
            return {
                token: state.token,
                check: state.check,
                username: state.username,
                email: state.email,
                password: state.password,
                contact: state.contact,
                resp: true,
                emailVerified: state.emailVerified
            }
            case 'EMAIL_VERIFICATION':
            return {
                token: state.token,
                check: action.check,
                username: state.username,
                email: state.email,
                password: state.password,
                contact: state.contact,
                resp: state.resp,
                emailVerified: action.emailVerified
            }
            case 'GET_RESPONSE':
            return {
                token: state.token,
                check: state.check,
                username: state.username,
                email: state.email,
                password: state.password,
                contact: state.contact,
                resp: false,
                emailVerified: state.emailVerified
            }
            case 'GET_POSITIVE_RESPONSE':
            return {
                token: state.token,
                check: state.check,
                username: action.data.username,
                email: action.data.email,
                password: action.data.password,
                contact: action.data.contact,
                resp: false,
                emailVerified: state.emailVerified
            }
            default:
            return state;
        }
}
export default userReducer;