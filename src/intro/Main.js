// import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';
// import PropTypes from 'prop-types';
// import { ScrollView, Text, View } from 'react-native';
// import { DrawerActions } from 'react-navigation';

// class Main extends Component {
//   navigateToScreen = (route) => () => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     this.props.navigation.dispatch(navigateAction);
//     this.props.navigation.dispatch(DrawerActions.closeDrawer())
//   }

//   render() {
//     return (
//       <View>
//         <ScrollView>
//           <View>
//             <View>
//               <Text onPress={this.navigateToScreen('Example')}>
//                 Add View
//               </Text>
//             </View>
//             <View>
//               <Text onPress={this.navigateToScreen('Home')}>
//                 Home
//               </Text>
//             </View>
//             <View>
//               <Text onPress={this.navigateToScreen('About')}>
//                 About
//               </Text>
//             </View>
//             <View>
//               <Text onPress={this.navigateToScreen('Contact')}>
//                 Contact
//               </Text>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// Main.propTypes = {
//   navigation: PropTypes.object
// };

// export default Main;


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import DrawerNavigator from '../navigation/DrawerNavigator';

export default class Main extends Component {

  render() {
    return (

      <View style={styles.container}>
        
        {/* header */}
        <View style={styles.header}>
          {/* itemL */}
          <View style={styles.itemHL}>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerNavigator')}> */}
              <Image
                style={styles.icon}
                source={require('../img/icon/toggle.png')}
              />
            {/* </TouchableOpacity> */}
            <Text style={styles.itemHLT}>Dashboard</Text>
          </View>
          {/* itemR */}
          <View style={styles.itemHR}>
            <TouchableOpacity>
              <Image
                style={styles.iconHR}
                source={require('../img/icon/notification.png')}
              />
            </TouchableOpacity>
          </View>

        </View>
        {/* body */}
        <ScrollView>
          {/* section */}
          <View style={{ marginTop: 70, }}>
            {/* tab container */}
            <View style={styles.tabC}>
              {/* tab */}
              <View style={styles.tab}>
                <View style={styles.colL}>
                  <Image
                    style={styles.tabI}
                    source={require('../img/icon/point.png')}
                  />
                  <Text style={styles.h3}>Total Points</Text>
                </View>
                <View style={styles.colR}>
                  <Text style={styles.h4}>3</Text>
                </View>
              </View>
              {/* tab */}
              <View style={styles.tab}>
                <View style={styles.colL}>
                  <Image
                    style={styles.tabI}
                    source={require('../img/icon/money.png')}
                  />
                  <Text style={styles.h3}>Total Earnings</Text>
                </View>
                <View style={styles.colR}>
                  <Text style={styles.h4}>3</Text>
                </View>
              </View>

            </View>
            {/* tab container */}
            <View style={styles.tabC}>
              {/* tab */}
              <View style={styles.tab}>
                <View style={styles.colL}>
                  <Image
                    style={styles.tabI}
                    source={require('../img/icon/refer.png')}
                  />
                  <Text style={styles.h3}>Total Referral</Text>
                </View>
                <View style={styles.colR}>
                  <Text style={styles.h4}>3</Text>
                </View>
              </View>
              {/* tab */}
              <View style={styles.tab}>
                <View style={styles.colL}>
                  <Image
                    style={styles.tabI}
                    source={require('../img/icon/rank.png')}
                  />
                  <Text style={styles.h3}>Binary Position</Text>
                </View>
                <View style={styles.colR}>
                  <Text style={styles.h4}>3</Text>
                </View>
              </View>

            </View>
          </View>
          {/* section */}
          <View style={styles.msgC}>
            <View style={styles.msgBox}>
              {/* heading */}
              <View style={styles.msgH}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/announcement.png')}
                />
                <Text style={styles.h5}>Admin Messages</Text>
              </View>
              {/* body */}
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
            </View>
          </View>
          {/* section */}
          <View style={styles.msgC}>
            <View style={styles.msgBox}>
              {/* heading */}
              <View style={styles.msgH}>
                <Image
                  style={styles.icon}
                  source={require('../img/icon/to-do.png')}
                />
                <Text style={styles.h5}>To Do Suggestion</Text>
              </View>
              {/* body */}
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
              <View style={styles.msgB}>
                <Image
                  style={styles.msgI}
                  source={require('../img/icon/angle.png')}
                />
                <Text style={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
              </View>
            </View>
          </View>

        </ScrollView >
        {/*  footer */}
        < View style={styles.footer} >
          {/* <ScrollView horizontal={true}> */}
          {/* item */}
          <TouchableOpacity style={styles.itemF}>
            <Image
              style={styles.icon}
              source={require('../img/icon/membership.png')}
            />

          </TouchableOpacity>
          {/* item */}
          <TouchableOpacity style={styles.itemF}>
            <Image
              style={styles.icon}
              source={require('../img/icon/task.png')}
            />

          </TouchableOpacity>
          {/* item */}
          <TouchableOpacity style={styles.itemF}>
            <Image
              style={styles.icon}
              source={require('../img/icon/product.png')}
            />

          </TouchableOpacity>

          {/* item */}
          <TouchableOpacity style={styles.itemF}>
            <Image
              style={styles.icon}
              source={require('../img/icon/withdraw.png')}
            />

          </TouchableOpacity>

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
  tabC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,


  },
  tab: {
    backgroundColor: '#eee',
    width: '45%',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  tabI: {
    width: 30,
    height: 30,
  },
  colL: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0099ff',
    marginTop: 15,
  },
  colR: {
    position: 'absolute',
    right: 0,
    margin: 10,
    width: 25,
    height: 25,
    backgroundColor: '#0099ff',
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h4: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
  },
  msgC: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  msgBox: {
    backgroundColor: '#eee',
    width: '95%',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  msgH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  h5: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0099ff',
    marginLeft: 10,
  },
  msgB: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  msgI: {
    width: 10,
    height: 10,
    marginTop: 5,
  },
  h2: {
    marginLeft: 10,
    color: '#000',
  },
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