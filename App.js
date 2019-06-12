import React, {Component} from 'react';
import AppNavigator from './src/navigation/appNavigator';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import NetInfo from "@react-native-community/netinfo";

import { Text, View } from 'react-native';
export default class App extends Component {
  state = {
    connection_Status : true
  }
  componentDidMount = () => {
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this._handleConnectivityChange

    );
   
    NetInfo.isConnected.fetch().done((isConnected) => {

      if(isConnected == true)
      {
        this.setState({connection_Status : true});
        store.dispatch({
          type: 'CONNECTION_STATUS',
          status: true
        });
      }
      else
      {
        this.setState({connection_Status : false});
        store.dispatch({
          type: 'CONNECTION_STATUS',
          status: false
        });
      }

    });
}
componentWillMount = () => {
    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange
 
    );
}
_handleConnectivityChange = (isConnected) => {

    if(isConnected == true)
      {
        this.setState({connection_Status : true});
        store.dispatch({
          type: 'CONNECTION_STATUS',
          status: true
        });
      }
      else
      {
        this.setState({connection_Status : false});
        store.dispatch({
          type: 'CONNECTION_STATUS',
          status: false
        });
      }
};
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          {!this.state.connection_Status && <View style={{position: 'absolute',top: 0,width: '100%',backgroundColor: '#FF0000'}}>
                <Text style={{fontSize: 20, textAlign: 'center',color: 'white',marginBottom: 5,marginTop: 5}}> No internet connection </Text>
          </View>}
        </PersistGate>
      </Provider>
    );
  }
}
