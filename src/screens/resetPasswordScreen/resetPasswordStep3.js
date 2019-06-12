import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon } from 'native-base';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import resetPasswordService from '../../services/resetPasswordServices/resetPasswordService';
class LoginScreen extends Component {
    state = {
        password: '',
        confirmPassword: '',
    }
    static navigationOptions = {
        header: null,
    }
    handleLogin = () => {
        console.log(this.props);
        if(this.state.password && this.state.confirmPassword){
            if(this.state.password === this.state.confirmPassword){
                let currentState = this.state;
                currentState.email = this.props.resetPassword.email;
                resetPasswordService.sendNewPassword(currentState,this.props.navigation);
            }
            else{
                alert('Wrong Combinations of password fields.');
            }
        }
        else{
            alert('Empty Fields are not Allowed.');
        }
    }
    handleInput = (field,value) => {
        this.setState({
            [field]: value
        });
    }
    render() {
        return (
            <View style={{backgroundColor: '#10e2fe',width: '100%',height: '100%'}}>
                <View style={{marginTop: 90, alignSelf: 'center',marginBottom: 25}}>
                    <Image
                    style={{width: 100,height: 150}}
                    source={require('../../assets/logo.png')}
                    />
                    </View>
                    <View style={{width: '96%'}}>
                    <Form style={{width: '85%',alignSelf: 'center'}}>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 20}}>
                            <Icon active name='unlock' style={{ color: "white" }} />
                            <Input onChangeText={value => {this.handleInput('password',value)}} value={this.state.password} selectionColor={'#FF4081'} secureTextEntry={true} style={{color: 'white'}} placeholderTextColor="white" placeholder="New Password" />
                        </Item>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2}}>
                            <Icon active name='unlock' style={{ color: "white" }} />
                            <Input onChangeText={value => {this.handleInput('confirmPassword',value)}} value={this.state.confirmPassword} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" secureTextEntry={true} placeholder="Confirm New Password" />
                        </Item>
                    </Form>
                    </View>
                    <View style={{width: '90%',alignSelf: 'center',marginTop: 30}}>
                        <TouchableHighlight disabled={!this.props.status.connect} onPress={this.handleLogin.bind(this)} style={{width: '89%',height: 70,alignSelf: 'center',backgroundColor: '#00bcd4'}}>
                            <Text style={{textAlign: 'center',color: 'white',fontSize: 20,marginTop: '7%'}}>
                                CHANGE PASSWORD
                            </Text>
                        </TouchableHighlight>
                    </View>
            </View>
        );
    }
}

function recieveData(store){
    return{
        registerData:store.userReducer,
        status:store.connectionStatusReducer,
        resetPassword:store.resetPasswordReducer,
    }
}

const newLoginScreen = connect(recieveData)(LoginScreen);
export default newLoginScreen;