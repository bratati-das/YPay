import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import ChangeTabStatus from './actions/ScreenAction';
import Signin from './intro/Signin';
// import Login from './intro/Login';
import Signup from './intro/Signup';
// import ForgotPassword from './intro/ForgotPassword';
// import EnterCode from './intro/EnterCode';
// import Chat from './chat/Chat';
import Main from './intro/Main';
import Profile from './intro/Profile';
import TopicView from './dailyTask/TopicView';
// import Ecommerce from './ecommerce/Ecommerce';
import FundBalance from './fund/fundBalnc';
import FundTransfer from './fund/fundTrans';
import WalletBalance from './fund/walletBalnc';
import WalletTransfer from './fund/walletTrans';
import DirectJoining from './membershipDetails/DirectJoining';
import PackageActive from './membershipDetails/PackageActivation';
import PackageDetails from './membershipDetails/PackageDeatils';
import YourRefferals from './membershipDetails/YourRefferals';





const Route = createStackNavigator(
  {
    Signin: { screen: Signin },
    // Login: { screen: Login },
    Signup: { screen: Signup },
    // ForgotPassword: { screen: ForgotPassword },
    // EnterCode: { screen: EnterCode },
    // Chat: { screen: Chat },
    Main: { screen: Main },
    Profile: { screen: Profile },
    TopicView: {screen: TopicView},
    // Ecommerce: {screen: Ecommerce},
    FundBalance: {screen: FundBalance},
    FundTransfer: {screen: FundTransfer},
    WalletBalance: {screen: WalletBalance},
    WalletTransfer: {screen: WalletTransfer},
    DirectJoining: {screen: DirectJoining},
    PackageActive: {screen: PackageActive},
    PackageDetails: {screen: PackageDetails},
    YourRefferals: {screen: YourRefferals},
  },
  {
    initialRouteName: 'Signin',
    headerMode: 'none',
  },
);

class App extends Component {
  updateTabState(prevState, currentState) {
    const { props } = this;
    props.ChangeTabStatus(prevState, currentState);
  }

  render() {
    return (
      <Route
        onNavigationStateChange={
          (prevState, currentState) => this.updateTabState(prevState, currentState)
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state };
};

App.propTypes = {
  ChangeTabStatus: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { ChangeTabStatus })(App);
