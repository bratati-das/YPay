
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class WalletTransfer extends Component {

  render() {
    return (

      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          {/* itemL */}
          <View style={styles.itemHL}>
            <Image
              style={styles.icon}
              source={require('../img/icon/back2.png')}
            />
            <Text style={styles.itemHLT}>Wallet Transfer</Text>
          </View>
          {/* itemR */}
          <View style={styles.itemHR}>
            <Image
              style={styles.iconHR}
              source={require('../img/icon/search.png')}
            />
            <Image
              style={styles.iconHR}
              source={require('../img/icon/notification.png')}
            />
            <Image
              style={styles.iconHR}
              source={require('../img/icon/cart.png')}
            />

          </View>

        </View>
        {/* body */}
        <View style={styles.body}>
          {/* section */}
          <View style={styles.topSec}>
            <Text style={styles.h1}>Wallet Balance</Text>
            <Text style={styles.h2}>500 Pts</Text>
          </View>
          {/* section */}
          <View style={styles.formC}>
            {/* row */}
            <View style={styles.form}>
              <View style={styles.item}>
                <View style={styles.iconV}>
                  <Image
                    style={styles.icon}
                    source={require('../img/icon/rupee.png')}
                  />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder={'Enter Transferable Amount'}
                    underlineColorAndroid='transparent'
                    placeholderTextColor="#9b9b9b"
                    returnKeyType='go'

                  />
                </View>
              </View>
            </View>
            {/* button */}
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnT}>Transfer</Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 10, }}
                source={require('../img/icon/moneyTrans.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View >




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },
  // header
  header: {
    flex: 0.1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -5,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  itemHL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  itemHLT: {
    color: '#000',
    fontSize: 16,
    marginLeft: 20,
  },

  itemHR: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  iconHR: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  // body
  body: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  topSec: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  h1: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  h2: {
    color: '#0099ff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  formC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
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
    width: '100%',
    backgroundColor: '#0099ff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  btnT: {
    fontSize: 16,
    color: '#fff',

  },
  icon: {
    width: 25,
    height: 25,
  },
});