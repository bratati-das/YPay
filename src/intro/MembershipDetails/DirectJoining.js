
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          {/* itemL */}
          <View style={styles.itemHL}>
            <Image
              style={styles.icon}
              source={require('./src/img/icon/back2.png')}
            />
            <Text style={styles.itemHLT}>Your Direct Joining</Text>
          </View>
          {/* itemR */}
          <View style={styles.itemHR}>
            <Image
              style={styles.iconHR}
              source={require('./src/img/icon/search.png')}
            />
            <Image
              style={styles.iconHR}
              source={require('./src/img/icon/notification.png')}
            />
            <Image
              style={styles.iconHR}
              source={require('./src/img/icon/cart.png')}
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
                  source={require('./src/img/icon/user.png')}
                />
                <Text style={styles.h1}>Saikat pariari</Text>
              </View>
              <View style={styles.secCR}>
                <Text style={styles.h2}>(YRB1402350711)</Text>
              </View>
            </View>

            {/* row */}
            <View style={styles.secR}>
              <View style={styles.secCL}>
                <Image
                  style={styles.icon}
                  source={require('./src/img/icon/user.png')}
                />
                <Text style={styles.h1}>Saikat pariari</Text>
              </View>
              <View style={styles.secCR}>
                <Text style={styles.h2}>(YRB1402350711)</Text>
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
    width: '60%',
    flexDirection: 'row',
  },
  secCR: {
    width: '40%',
    flexDirection: 'row',
  },
  h1: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  h2: {
    color: '#9b9b9b',
    fontSize: 16,
  },
  icon: {
    width: 25,
    height: 25,
  },
});