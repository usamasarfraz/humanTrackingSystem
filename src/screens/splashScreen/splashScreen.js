import React, {Component} from 'react';
import {Platform, Image, Text, View, TouchableHighlight } from 'react-native';
export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style={{width:'100%',height:'100%',backgroundColor: '#10e2fe'}}>
                <View style={{display: 'flex',alignItems: 'center',marginTop: '35%'}}>
                    <Text style={{color:'white',fontSize: 40}}>
                        Let's Locate
                    </Text>
                    <Text style={{color:'white',fontSize: 15}}>
                        By Alpha Group
                    </Text>
                    <View>
                    <Image
                    style={{width: 100,height: 150}}
                    source={require('../../assets/logo.png')}
                    />
                    </View>
                </View>
                <View style={{position: 'absolute',bottom: 0,display: 'flex',flexDirection: 'row',width: '100%'}}>
                    <TouchableHighlight onPress={()=>{navigate('LoginScreen')}} style={{width: '50%',height: 70,backgroundColor: '#00bcd4',}}>
                        <Text style={{color:'white',fontSize: 25,textAlign: 'center',marginTop: '10%'}}>
                            SIGN IN
                        </Text>
                    </TouchableHighlight >
                    <TouchableHighlight onPress={()=>{navigate('RegisterScreen')}} style={{width: '50%',height: 70,backgroundColor: '#ff4081'}}>
                        <Text style={{color:'white',fontSize: 25,textAlign: 'center',marginTop: '10%'}}>
                            REGISTER
                        </Text>
                    </TouchableHighlight >
                </View>
        </View>
        );
    }
}