import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

class Chat extends Component {
  state = {
    email: '',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <Text style={{ color: '#F13564', fontSize: 28, fontWeight: '700' }}>Login</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <View>
              <View style={styles.InputView}>
                <TextInput
                  style={{ paddingLeft: 20, fontSize: 18 }}
                  value={this.state.email}
                  placeholder="Email"
                />
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <View style={[styles.InputView]}>
                <TextInput
                  style={{ paddingLeft: 20, fontSize: 18 }}
                  value={this.state.email}
                  placeholder="Password"
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ }}>
              <Image style={{ width: 149, height: 35 }} source={require('../img/login_btn_2x.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')} style={{ paddingTop: 20 }}>
              <Text style={{ color: '#F13564', fontSize: 18 }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  InputView: {
    width: 320,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 1,
  },
}

export default Chat;
