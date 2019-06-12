import {store} from '../../store/store';
import endPoint from '../../endPoint';
export default {
    sendResetRequest: (data,navigation) => {
        fetch(endPoint+'/user/forgetpassword/reset_password',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.dataNotFound){
                alert('Your Email not registered on this platform. Please enter valid Email.')
            }
            else{
                if(data.phoneCheck){
                    switch (resp.type) {
                        case 'messageSended':
                        console.log(resp);
                            store.dispatch({
                                type: 'PHONE_RESPONSE_RECIEVE',
                                phone: resp.data.contact
                            });
                            navigation.navigate('ResetPasswordStep2');
                            break;
                    
                        case 'messageNotSended':
                            alert(resp.message);
                            break;
                        default:
                            break;
                    }
                }
                else if(data.emailCheck){
                    switch (resp.type) {
                        case 'mailSended':
                            store.dispatch({
                                type: 'EMAIL_RESPONSE_RECIEVE',
                                email: resp.data.email
                            });
                            navigation.navigate('ResetPasswordStep2');
                            break;
                    
                        case 'mailNotSended':
                            alert(resp.message)
                            break;
                        default:
                            break;
                    }
                }
                else{
                    alert('Request Failed. Please try again.');
                }
            }
        }).catch((err)=>{
            console.log(err);
        })
    },
    sendNewPassword: (data,navigation) => {
        fetch(endPoint+'/user/forgetpassword/change_password',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.passwordUpdated){
                navigation.navigate('DashboardScreen');
            }
            else{
                alert('Request Failed. Please try again.')
            }
        }).catch((err)=>{
            console.log(err);
        });
    }
}