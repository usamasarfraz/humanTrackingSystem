import React, {Component} from 'react';
import validator from 'validator';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon } from 'native-base';
import Dialog from '../dialog/dialog';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import registerAction from '../../store/actions/registerAction/registerAction';
import LoadingScreen from '../loadingScreen/loadingScreen';

class RegisterScreen extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        contact: '',
        params: ''
    }
    static navigationOptions = {
        header: null,
        // title: 'Example',
        // headerTintColor: 'lightgrey',
        // headerStyle: { backgroundColor: 'deepskyblue', borderWidth: 1, borderBottomColor: 'white' },
    }
    handleRegister = () => {
        if(this.state.username && this.state.email && this.state.password && this.state.contact){
            if(!validator.isEmail(this.state.email.trim())){
                this.setState({
                    params: 'Emai'
                });
            }
            else if(this.state.contact.length < 11){
                this.setState({
                    params: 'Phone Number'
                });
            }else if(this.state.contact.slice(0,3) != '030' && this.state.contact.slice(0,3) != '032' && this.state.contact.slice(0,3) != '034' && this.state.contact.slice(0,3) != '031' && this.state.contact.slice(0,3) != '033'){
                this.setState({
                    params: 'Phone Number'
                });
            }
            else{
                let token = `${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`;
                let currentState = this.state;
                currentState.email = currentState.email.toLowerCase().trim();
                store.dispatch(registerAction({...currentState,token: token},this.props.navigation));
            }
        }
        else{
            if(!this.state.username){
                this.setState({
                    params: 'User Name'
                });
            }
            else if(!this.state.email){
                this.setState({
                    params: 'Emai'
                });
            }
            else if(!this.state.password){
                this.setState({
                    params: 'Password'
                });
            }
            else if(!this.state.contact){
                this.setState({
                    params: 'Contact'
                });
            }
        }
    }
    handleInput = (field,value) => {
        this.setState({
            [field]: value
        });
    }
    handleClose = () => {
        this.setState({
            params: ''
        });
    }
    render() {
        if(this.props.registerData.resp){
            return <LoadingScreen />
        }
        return (
            <View style={{backgroundColor: '#10e2fe',width: '100%',height: '100%'}}>
                <View style={{marginTop: 45, alignSelf: 'center',marginBottom: 10}}>
                    <Image
                    style={{width: 100,height: 150}}
                    source={require('../../assets/logo.png')}
                    />
                </View>
                <View style={{width: '96%'}}>
                    <Form style={{width: '85%',alignSelf: 'center'}}>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 15}}>
                            <Icon active name='person' style={{ color: "white" }} />
                            <Input onChangeText={value => this.handleInput('username',value)} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Username" />
                        </Item>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 15}}>
                            <Icon active name='mail' style={{ color: "white" }} />
                            <Input value={this.state.email} onChangeText={value => this.handleInput('email',value)} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Email" />
                        </Item>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 15}}>
                            <Icon active name='unlock' style={{ color: "white" }} />
                            <Input value={this.state.password} onChangeText={value => this.handleInput('password',value)} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" secureTextEntry={true} placeholder="Create Password" />
                        </Item>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 30}}>
                            <Icon active name='md-call' style={{ color: "white" }} />
                            <Input value={this.state.contact} onChangeText={value => this.handleInput('contact',value)} maxLength={11} keyboardType='number-pad' selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Contact" />
                        </Item>
                    </Form>
                    </View>
                    <View style={{width: '90%',alignSelf: 'center'}}>
                        <TouchableHighlight disabled={!this.props.status.connect} onPress={this.handleRegister.bind(this)} style={{width: '89%',height: 70,alignSelf: 'center',backgroundColor: '#00bcd4'}}>
                            <Text style={{textAlign: 'center',color: 'white',fontSize: 20,marginTop: '7%'}}>
                                Register
                            </Text>
                        </TouchableHighlight>
                    </View>
                    {this.state.params?<Dialog handleClose={this.handleClose.bind(this)} params={this.state.params} />:null}
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

const newRegisterScreen = connect(recieveData)(RegisterScreen);
export default newRegisterScreen;