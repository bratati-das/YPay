import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Picker } from 'react-native';

export default class Signup extends Component {
  state = { user: '' }
  updateUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          {/* logo */}
          <Image style={styles.logo}
            source={require('../img/logo.png')}
          />
          {/* heading */}
          <Text style={styles.h1}>Member Registration</Text>
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
                  placeholder={'Full Name'}
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
                  source={require('../img/icon/email.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Email ID'}
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
                  source={require('../img/icon/ph.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Mobile Number'}
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
                  source={require('../img/icon/card.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Pan Card Number'}
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
                  source={require('../img/icon/id.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Referral ID'}
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
                  source={require('../img/icon/id.png')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder={'Joiner ID'}
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#9b9b9b"

                />
              </View>
            </View>
          </View>
          {/* row */}
          <View style={styles.formP}>
            <View style={styles.item}>
              <View style={styles.iconV}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/package.png')}
                />
              </View>
              <View style={styles.input}>
                <Picker style={{ fontSize: 16, color: '#9b9b9b' }} selectedValue={this.state.user} onValueChange={this.updateUser}>
                  <Picker.Item label="Select Package" value="Select Package" />
                  <Picker.Item label="Silver" value="Silver" />
                  <Picker.Item label="Silver" value="Silver" />
                </Picker>
              </View>
            </View>
          </View>

          {/* button */}
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnT}>Register</Text>
            <Image
              style={{ width: 20, height: 20, marginLeft: 10, }}
              source={require('../img/icon/arrow.png')}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '3%',
  },
  logo: {
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 40,
    marginVertical: 10,

  },
  formP: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 40,
    marginTop: 15,
    marginBottom: 10,

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
});
