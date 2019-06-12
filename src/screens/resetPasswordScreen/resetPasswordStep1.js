import React, {Component} from 'react';
import validator from 'validator';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon, ListItem, Radio, Right, Left } from 'native-base';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import resetRequestAction from '../../store/actions/resetPasswordActions/sendResetRequestAction';
class Reset1Screen extends Component {
    state = {
        email: '',
        phoneCheck: true,
        emailCheck: false
    }
    static navigationOptions = {
        header: null,
    }
    handleInput = (field,value) => {
        this.setState({
            [field]: value 
        });
    }
    handlRadio = (field) => {
        this.setState({
            phoneCheck: false,
            emailCheck: false
        },()=>{
            this.setState({
                [field]: true
            });
        });
    }
    handleContinue = () => {
        if(validator.isEmail(this.state.email.trim())){
            let token = `${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`;
            let currentState = this.state;
            currentState.email = currentState.email.toLowerCase().trim();
            store.dispatch(resetRequestAction({...currentState,token: token},this.props.navigation));
        }
        else{
            alert('Please enter valid email.');
        }

    }
    render() {
        return (
            <View style={{backgroundColor: '#10e2fe',width: '100%',height: '100%'}}>
                <View style={{marginTop: 90, alignSelf: 'center',marginBottom: 25}}>
                    <Image
                    style={{width: 100,height: 100}}
                    source={require('../../assets/password.png')}
                    />
                </View>
                <View style={{width: '96%'}}>
                    <Form style={{width: '85%',alignSelf: 'center'}}>
                        <Item style={{borderColor: '#FF4081', borderBottomWidth: 2,marginBottom: 15}}>
                            <Icon active name='mail' style={{ color: "white" }} />
                            <Input onChangeText={value => {this.handleInput('email',value)}} value={this.state.email} selectionColor={'#FF4081'} style={{color: 'white'}} placeholderTextColor="white" placeholder="Enter Email" />
                        </Item>
                    </Form>
                </View>
                <View style={{width: '96%',marginBottom: 15}}>
                    <ListItem onPress={this.handlRadio.bind(this,'phoneCheck')} style={{width: '82%',alignSelf: 'center',borderColor: '#FF4081', borderBottomWidth: 2}}>
                        <Left>
                            <Text style={{color: 'white',fontSize: 15}}>Verify by Phone</Text>
                        </Left>
                        <Right>
                            <Radio style={{borderColor: 'white'}} selected={this.state.phoneCheck} />
                        </Right>
                    </ListItem>
                </View>
                <View style={{width: '96%'}}>
                    <ListItem onPress={this.handlRadio.bind(this,'emailCheck')} style={{width: '82%',alignSelf: 'center',borderColor: '#FF4081', borderBottomWidth: 2}}>
                        <Left>
                            <Text style={{color: 'white',fontSize: 15}}>Verify by Email</Text>
                        </Left>
                        <Right>
                            <Radio style={{shadowColor: 'white'}} selected={this.state.emailCheck} />
                        </Right>
                    </ListItem>
                </View>
                <View style={{width: '89%',alignSelf: 'center',marginTop: 30}}>
                        <TouchableHighlight disabled={!this.props.status.connect} onPress={this.handleContinue.bind(this)} style={{width: '89%',height: 70,alignSelf: 'center',backgroundColor: '#00bcd4'}}>
                            <Text style={{textAlign: 'center',color: 'white',fontSize: 20,marginTop: '7%'}}>
                                Continue
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

const newReset1Screen = connect(recieveData)(Reset1Screen);
export default newReset1Screen;