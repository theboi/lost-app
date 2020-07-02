import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {LoginButton} from '../../components/Button/Login';
import {PageHeader} from '../../components/Page/PageHeader';
import {K} from '../../store/constants';

const FindPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  return (
    <Layout style={{height: '100%'}}>
      <PageHeader
        theme={props.theme}
        title="Find"
        type="small"
        bottomBar={false}
        navigation={props.navigation}
      />
      <LoginButton title='Login With Apple' theme={props.theme} icon='apple' style={{backgroundColor: themeColor.black}} color={themeColor.lightText} />
      <LoginButton title='Login With Google' theme={props.theme} icon='google' />
      <LoginButton title='Set Up Later' theme={props.theme} color={themeColor.black}/>
      {/* <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    deviceSize: state.deviceSize
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const FindPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindPageC);
