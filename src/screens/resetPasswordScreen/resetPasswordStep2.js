import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';
import {connect} from 'react-redux';

class ResetPassword2 extends Component {
    state = {
        tokenValue: ''
    }
    static navigationOptions = {
        header: null,
    }
    handleChange = (value) => {
        this.setState({
            tokenValue: value
        });
    }
    handleContinue = () => {
        if(this.state.tokenValue.length === 4){
            if(this.props.resetPassword.token == this.state.tokenValue){
                this.props.navigation.navigate('ResetPasswordStep3');
            }
            else{
                alert('Invalid Code. Please check again.');
            }
        }
        else{
            alert('Invalid Code. Please check again.');
        }
    }
    render() {
        return (
            <View style={{backgroundColor: '#10e2fe',width: '100%',height: '100%'}}>
                {this.props.resetPassword.phoneCheck?<View style={{width: 110,height: 110,alignSelf: 'center',marginTop: 70}}>
                    <Image
                    style={{width: 110,height: 110}}
                    source={require('../../assets/sms2.png')}
                    />
                </View>:<View style={{width: 140,height: 140,alignSelf: 'center',marginTop: 70}}>
                    <Image
                    style={{width: 140,height: 140}}
                    source={require('../../assets/email.png')}
                    />
                </View>
                }
                <View style={{alignSelf: 'center',marginTop: 10}}>
                    <Text style={{color: 'white',fontSize: 25}}>
                        {this.props.resetPassword.phoneCheck?'Phone':'Email'} Verification
                    </Text>
                </View>
                <View style={{marginTop: 5,width: '90%',alignSelf: 'center'}}>
                    <Text style={{color: 'white',fontSize: 17,textAlign: 'center'}}>
                        We have sent a Verification code on {this.props.resetPassword.phoneCheck?`${this.props.resetPassword.phone.slice(0,4)}*****${this.props.resetPassword.phone.slice(this.props.resetPassword.phone.length-2)}`:`${this.props.resetPassword.email.slice(0,2)}*****${this.props.resetPassword.email.slice(this.props.resetPassword.email.indexOf('@')-2)}`}. Enter the code to verify your account.
                    </Text>
                </View>
                <View style={{width: '96%'}}>
                    <Form style={{width: '50%',alignSelf: 'center'}}>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 20}}>
                            <Input value={this.state.tokenValue} onChangeText={value => {this.handleChange(value)}} maxLength={4} keyboardType='number-pad' selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Enter 4 digit code" />
                        </Item>
                    </Form>
                </View>
                <View style={{width: '100%'}}>
                    <Button onPress={this.handleContinue.bind(this)} style={{width: '45%',alignSelf: 'center'}} info>
                        <Text style={{width: '100%',textAlign: 'center',color: 'white'}}>Continue</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

function recieveData(store){
    console.log(store);
    return{
        resetPassword:store.resetPasswordReducer,
    }
}

const newResetPassword2 = connect(recieveData)(ResetPassword2);
export default newResetPassword2;