
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';


export default class WalletBalance extends Component {

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
            <Text style={styles.itemHLT}>Wallet Balance</Text>
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
        <ScrollView style={styles.body}>
          {/* section */}
          <View style={styles.topSec}>
            <Text style={styles.h1}>Available Balance</Text>
            <Text style={styles.h2}>500 Pts</Text>
          </View>
          {/* section */}
          {/* row */}
          {/* list container */}
          <TouchableOpacity style={styles.listC}>
            {/* list icon */}
            <View style={styles.listI}>
              <Image style={styles.icon} source={require('../img/icon/statement.png')} />
            </View>
            {/* list name */}
            <View style={styles.listTB}>
              <Text style={styles.listT}>Balance Report</Text>
              <Image style={styles.listA} source={require('../img/icon/angle.png')} />
            </View>
          </TouchableOpacity>
        </ScrollView>

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
    paddingVertical: 20,
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
  listC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 5,
  },
  listI: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listTB: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  listT: {
    color: '#000',
    fontSize: 16
  },
  listA: {
    width: 15,
    height: 15,
  },
  icon: {
    width: 25,
    height: 25,
  },
});