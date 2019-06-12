import React, { Component } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
 
export default class DialogComponent extends Component {
  state = {
    dialogVisible: true
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
    this.props.handleClose();
  };
 
  handleOk = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
    this.props.handleClose();
  };
 
  render() {
      let params = this.props.params;
    return (
      <View>
        {/* <TouchableOpacity onPress={this.showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity> */}
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Account Configuration</Dialog.Title>
          <Dialog.Description>
            {`${params} is not valid.Please enter valid ${params}.`}
          </Dialog.Description>
          {/* <Dialog.Button label="Cancel" onPress={this.handleCancel} /> */}
          <Dialog.Button label="Ok" onPress={this.handleOk} />
        </Dialog.Container>
      </View>
    );
  }
}