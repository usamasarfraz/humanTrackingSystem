import React from 'react';
import {View, Text, Image} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
 export default class LoadingScreen extends React.Component {
    render() {
     return(
        <View style={{display: 'flex',alignItems: 'center',paddingTop: 30,width: '100%', height: '100%',backgroundColor: '#10e2fe'}}>
            <View style={{display: 'flex',alignItems: 'center',marginTop: '15%',marginBottom: 120}}>
                <View>
                    <Image
                    style={{width: 100,height: 150}}
                    source={require('../../assets/logo.png')}
                    />
                </View>
            </View>
            <Bars size={25} color="white" />
            <Text style={{color:'white',fontSize: 40,marginTop: 25}}>
                Loading
            </Text>
        </View>
     );
    }
}