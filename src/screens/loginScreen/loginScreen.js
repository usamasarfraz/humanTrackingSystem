import React, {Component} from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon } from 'native-base';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import loginAction from '../../store/actions/loginAction/loginAction';
import LoadingScreen from '../loadingScreen/loadingScreen';
class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
    }
    static navigationOptions = {
        header: null,
        // title: 'Example',
        // headerTintColor: 'lightgrey',
        // headerStyle: { backgroundColor: 'deepskyblue', borderWidth: 1, borderBottomColor: 'white' },
    }
    handleLogin = () => {
        console.log(this.props);
        if(this.state.email && this.state.password){
            let currentState = this.state;
            currentState.email = currentState.email.toLowerCase().trim();
            store.dispatch(loginAction(currentState,this.props.navigation));
        }
        else{
            alert('Wrong Combination of Email or Password.');
        }
    }
    handleInput = (field,value) => {
        this.setState({
            [field]: value
        });
    }
    render() {
        if(this.props.registerData.resp){
            return <LoadingScreen />
        }
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
                            <Icon active name='mail' style={{ color: "white" }} />
                            <Input onChangeText={value => {this.handleInput('email',value)}} value={this.state.email} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Email" />
                        </Item>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2}}>
                            <Icon active name='unlock' style={{ color: "white" }} />
                            <Input onChangeText={value => {this.handleInput('password',value)}} value={this.state.password} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" secureTextEntry={true} placeholder="Password" />
                        </Item>
                    </Form>
                    <View style={{width: '85%',marginBottom: 20,marginTop: 20}}>
                        <Text style={{color: 'white',fontSize: 18,alignSelf: 'flex-end'}} onPress={()=>{this.props.navigation.navigate('ResetPasswordStep1')}}>
                            Forgot Password?
                        </Text>
                    </View>
                    </View>
                    <View style={{width: '90%',alignSelf: 'center'}}>
                        <TouchableHighlight disabled={!this.props.status.connect} onPress={this.handleLogin.bind(this)} style={{width: '89%',height: 70,alignSelf: 'center',backgroundColor: '#00bcd4'}}>
                            <Text style={{textAlign: 'center',color: 'white',fontSize: 20,marginTop: '7%'}}>
                                LOG IN
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
        status:store.connectionStatusReducer
    }
}

const newLoginScreen = connect(recieveData)(LoginScreen);
export default newLoginScreen;