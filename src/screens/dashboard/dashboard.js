import React, {Component} from 'react';
import {Platform, Image, Text, View, TouchableHighlight } from 'react-native';
import {Icon, Button} from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken("pk.eyJ1IjoidXNhbWFzYXJmcmF6ODIyIiwiYSI6ImNqdjd2c2tybDA5bTE0M250Mm43NTlsOG8ifQ.4GqmaOEvdpyLUuk94s4_iQ");
export default class SplashScreen extends Component {
    render() {
        return (
        <View style={{flex: 1}}>
            <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={12}
            centerCoordinate={[73.079109,31.418715]}
            style={{flex: 1}}
            />
            <View style={{position: "absolute",paddingTop: 20,paddingLeft: 20}}>
                <TouchableHighlight onPress={()=> this.props.navigation.openDrawer()}>
                    <Icon active name='md-menu' />
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}