import React, {Component} from 'react';
import {Platform, Image, Text, View, TouchableHighlight } from 'react-native';
import {Icon, Button} from 'native-base';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
        <View style={{flex: 1}}>
            <Text style={{alignSelf: 'center'}}>
                Edit Profile
            </Text>
        </View>
        );
    }
}