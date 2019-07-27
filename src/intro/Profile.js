import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default class Profile extends Component {

  render() {
    return (

      <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/* itemL */}
        <View style={styles.itemHL}>
          <Image
            style={styles.icon}
            source={require('../img/icon/back.png')}
          />
        </View>
        {/* itemR */}
        {/* <View style={styles.itemHR}>
          <Image
            style={styles.iconHR}
            source={require('../img/icon/notification.png')}
          />
        </View> */}

      </View>
      {/* body */}
      {/* banner */}
      <View>
        <Image style={styles.prflBg} source={require('../img/bg.jpg')} />
      </View>
      {/* profile img */}
      <View>
        <Image style={styles.prflPc} source={require('../img/profile.jpg')} />
      </View>
      {/* profile name */}
      <View>
        <Text style={styles.h1}>Profile Name</Text>
      </View>
      {/* list body */}
      <ScrollView>
          {/* list container */}
          <TouchableOpacity style={styles.listC}>
            {/* list icon */}
            <View style={styles.listI}>
              <Image style={styles.icon} source={require('../img/icon/settings.png')} />
            </View>
            {/* list name */}
            <View style={styles.listTB}>
              <Text style={styles.listT}>Settings</Text>
              <Image style={styles.listA} source={require('../img/icon/angle.png')} />
            </View>
          </TouchableOpacity>
           {/* list container */}
          <TouchableOpacity style={styles.listC}>
            {/* list icon */}
            <View style={styles.listI}>
              <Image style={styles.icon} source={require('../img/icon/logout.png')} />
            </View>
            {/* list name */}
            <View style={styles.listTB}>
              <Text style={styles.listT}>Log Out</Text>
              <Image style={styles.listA} source={require('../img/icon/angle.png')} />
            </View>
          </TouchableOpacity>

        </ScrollView>
      
      {/*  footer */}
      < View style={styles.footer} >
        {/* <ScrollView horizontal={true}> */}
        {/* item */}
        <View style={styles.itemF}>
          <Image
            style={styles.icon}
            source={require('../img/icon/membership.png')}
          />

        </View>
        {/* item */}
        <View style={styles.itemF}>
          <Image
            style={styles.icon}
            source={require('../img/icon/task.png')}
          />

        </View>
        {/* item */}
        <View style={styles.itemF}>
          <Image
            style={styles.icon}
            source={require('../img/icon/product.png')}
          />

        </View>

        {/* item */}
        <View style={styles.itemF}>
          <Image
            style={styles.icon}
            source={require('../img/icon/withdraw.png')}
          />

        </View>

        {/* </ScrollView> */}
      </View >
    </View >




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // header
  header: {
    flex: 0.1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -5,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0)',
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
    alignItems: 'center',
    justifyContent: 'center',

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

  prflBg: {
    alignItems: 'stretch',
    top: -2,
    height: 150,
    zIndex: 1,
  },
  prflPc: {
    width: 120,
    height: 120,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: '#fff',
    bottom: 40,
    marginBottom: -35,
    zIndex: 2,

  },
  h1: {
    fontSize: 22,
    color: '#000',

  },
  listC: {
    flexDirection: 'row',
     justifyContent: 'flex-start', 
     alignItems: 'center', 
     paddingLeft: 20,

  },
  listI: {
    width: '12%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  listTB: {
    width: '88%',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingRight: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listT: {
    color: '#000', 
    fontSize: 16
  },
  listA: { 
    width: 10, 
    height: 10, 
    marginTop: 3, 
  },
  // footer
  footer: {
    flex: 0.1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
    height: 60,

    marginBottom: 5,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemF: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});