import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default class TopicView extends Component {

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
            <Text style={styles.itemHLT}>Topic View</Text>
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
        <ScrollView>
          <View style={styles.body}>
            {/* section */}
            {/* row */}
            <View style={styles.secR}>
              <View style={styles.secCL}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/topic.png')}
                />
                <Text style={styles.h1}>Topic No. 1</Text>
              </View>
              <View style={styles.secCR}>
                <Text style={styles.h2}>Viewed</Text>
              </View>
            </View>
            {/* row */}
            <View style={styles.secR}>
              <View style={styles.secCL}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/topic.png')}
                />
                <Text style={styles.h1}>Topic No. 2</Text>
              </View>
              <View style={styles.secCR}>
                <Text style={styles.h2}>Viewed</Text>
              </View>
            </View>

            {/* row */}
            <View style={styles.secR}>
              <View style={styles.secCL}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/topic.png')}
                />
                <Text style={styles.h1}>Topic No. 3</Text>
              </View>
              <View style={styles.secCR}>
                <Text style={styles.h3}>Not Viewed</Text>
              </View>
            </View>


          </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    marginTop: 70,
    paddingHorizontal: 20,
  },
  secR: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
  },
  secCL: {
    width: '70%',
    flexDirection: 'row',
  },
  secCR: {
    width: '30%',
    flexDirection: 'row',
  },
  h1: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  h2: {
    backgroundColor: '#0099ff',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  },
  h3: {
    backgroundColor: '#f00',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
});