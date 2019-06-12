import {store} from '../../store/store';
import endPoint from '../../endPoint';
export default {
    registerUser: (data,navigation) => {
        fetch(endPoint+'/user/register/send_mail',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            store.dispatch({
                type: 'GET_RESPONSE'
            });
            if(resp.dataFound){
                alert('Email already Registered.');
                store.dispatch({
                    type: 'EMAIL_VERIFICATION',
                    check: false
                });
                navigation.navigate('LoginScreen');
            }
            
                // navigation.navigate('EmailVerificationScreen');
            else{
                switch (resp.type) {
                    case 'emailNotSended':
                    store.dispatch({
                        type: 'EMAIL_VERIFICATION',
                        check: false,
                        emailVerified: false
                    });
                        console.log(resp.data);
                        break;
                    case 'emailSended':
                    store.dispatch({
                        type: 'EMAIL_VERIFICATION',
                        check: true,
                        emailVerified: false
                    });
                    navigation.navigate('EmailVerificationScreen');
                        break;
                    case 'dataSaved':
                    store.dispatch({
                        type: 'EMAIL_VERIFICATION',
                        check: false,
                        emailVerified: false
                    });
                    navigation.navigate('DashboardScreen');
                        break;
                    case 'dataNotSaved':
                    store.dispatch({
                        type: 'EMAIL_VERIFICATION',
                        check: true,
                        emailVerified: true
                    });
                    alert(resp.data);
                        break;
                    case 'invalidPhone':
                    store.dispatch({
                        type: 'EMAIL_VERIFICATION',
                        check: true,
                        emailVerified: true
                    });
                    alert(resp.data);
                        break;
                    default:
                        break;
                }
            }
        }).catch((err)=>{
            console.log(err);
        })
    },
    verifiedUser: (data,navigation) => {
        fetch(endPoint+'/user/register/verified_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.saved){
                store.dispatch({
                    type: 'EMAIL_VERIFICATION',
                    check: false,
                    emailVerified: false
                });
                navigation.navigate('DashboardScreen');
            }
            else{
                store.dispatch({
                    type: 'EMAIL_VERIFICATION',
                    check: true,
                    emailVerified: true
                });
                alert(resp.message);
                navigation.navigate('RegisterScreen');
            }
        }).catch((err)=>{
            console.log(err);
        })
    },
    loginUser: (data,navigation) => {
        fetch(endPoint+'/user/login/login_user',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.dataFound){
                store.dispatch({
                    type: 'GET_POSITIVE_RESPONSE',
                    data: resp.data
                });
                navigation.navigate('DashboardScreen');
            }
            else{
                store.dispatch({
                    type: 'GET_RESPONSE'
                });
                alert('Wrong Combination of Username or Password.')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
}