import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';
import {connect} from 'react-redux';

import userService from '../../services/userServices/userService';
class VerificationScreen extends Component {
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
            if(this.props.registerData.token == this.state.tokenValue){
                userService.verifiedUser(this.props.registerData,this.props.navigation);
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
                <View style={{width: 150,height: 150,alignSelf: 'center',marginTop: 70}}>
                    <Image
                    style={{width: 150,height: 150}}
                    source={require('../../assets/email.png')}
                    />
                </View>
                <View style={{alignSelf: 'center',marginTop: 10}}>
                    <Text style={{color: 'white',fontSize: 25}}>
                        Email Verification
                    </Text>
                </View>
                <View style={{marginTop: 5,width: '90%',alignSelf: 'center'}}>
                    <Text style={{color: 'white',fontSize: 17,textAlign: 'center'}}>
                        Enter Verification code sended on {this.props.registerData.email.slice(0,2)}*****{this.props.registerData.email.slice(this.props.registerData.email.indexOf('@')-2)} proving you own an email.
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
                    <Button onPress={this.handleContinue.bind(this)} disabled={this.state.tokenValue.length == 4?false:true} style={{width: '45%',alignSelf: 'center'}} info>
                        <Text style={{width: '100%',textAlign: 'center',color: 'white'}}>Continue</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

function recieveData(store){
    return{
        registerData:store.userReducer,
    }
}

const newVerificationScreen = connect(recieveData)(VerificationScreen);
export default newVerificationScreen;