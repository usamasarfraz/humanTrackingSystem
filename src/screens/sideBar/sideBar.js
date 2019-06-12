import React, {Component} from 'react';
import { View } from 'react-native';
import { ListItem, Text, Icon, Left, Body, Button } from 'native-base';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
class SideBar extends Component {
    render() {
        return (
        <View style={{flex: 1}}>
            <View style={{height: 260, backgroundColor: '#585858'}}>
                {/* <View style={{alignSelf: 'center',marginTop: 15}}>
                    <Avatar
                        source={{
                            uri:{Email},
                        }}
                        showEditButton
                    />
                </View> */}
                <View style={{alignSelf: 'center',marginTop: 15}}>
                    <Avatar size="xlarge" rounded icon={{name: 'user', type: 'font-awesome'}} />
                </View>
                <View style={{alignSelf: 'center',marginTop: 25}}>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                        {this.props.userData.username}
                    </Text>
                </View>
            </View>
            <View>
                <ListItem onPress={() => this.props.navigation.navigate('EditProfileScreen')} icon>
                    <Left>
                    <Button style={{ backgroundColor: "#A8A8A8" }}>
                        <Icon active name="settings" />
                    </Button>
                    </Left>
                    <Body>
                        <Text>Edit Profile</Text>
                    </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('LoginScreen')} icon>
                    <Left>
                    <Button style={{ backgroundColor: "#A8A8A8" }}>
                        <Icon active name="md-log-out" />
                    </Button>
                    </Left>
                    <Body>
                        <Text>Log Out</Text>
                    </Body>
                </ListItem>
            </View>
        </View>
        );
    }
}

function recieveData(store){
    return{
        userData:store.userReducer,
        status:store.connectionStatusReducer
    }
}

const newSideBar = connect(recieveData)(SideBar);
export default newSideBar;