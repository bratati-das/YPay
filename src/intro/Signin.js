import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';
class Signin extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          {/* logo */}
          <Image style={styles.logo}
            source={require('../img/logo.png')}
          />
          {/* heading */}
          <Text style={styles.h1}>Sign Up</Text>
          {/* row */}
          <View style={styles.form}>
            <View style={styles.item}>
              <View style={styles.iconV}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/user.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Username'}
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#9b9b9b"

                />
              </View>
            </View>
          </View>
          {/* row */}
          <View style={styles.form}>
            <View style={styles.item}>
              <View style={styles.iconV}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/lock.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Password'}
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#9b9b9b"
                  returnKeyType='go'
                  secureTextEntry
                />
              </View>
            </View>
          </View>
          {/* button */}
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Main')}>
            <Text style={styles.btnT}>Sign Up</Text>
            <Image
              style={{ width: 20, height: 20, marginLeft: 10, }}
              source={require('../img/icon/arrow.png')}
            />
          </TouchableOpacity>
          {/* link */}
          <View style={styles.link}>
            <TouchableOpacity style={styles.linkT} onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
            <Text style={styles.linkT}>|</Text>
            <TouchableOpacity style={styles.linkT} onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Register Now</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: '20%',
    paddingBottom: '25%',

  },
  logo: {
    alignItems: 'stretch',
    marginTop: '20%',
    marginBottom: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginVertical: 10,

  },
  item: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9b9b9b',
    borderRadius: 5,

  },
  iconV: {
    width: '15%',
    padding: 10,
    paddingTop: 13,

  },
  icon: {
    width: 22,
    height: 22,


  },
  input: {
    width: '85%',
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    backgroundColor: '#0099ff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  btnT: {
    fontSize: 16,
    color: '#fff',

  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  linkT: {
    paddingHorizontal: 10,
  }
});
export default Signin;
