import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants, Location, WebBrowser, MapView, Permissions } from 'expo';
import Map from '../components/Map';
import Hunt from '../components/Hunt';
import CameraComponent from '../components/Camera';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        currentPage: 'map',
        currentChallenge: null,
      };

    }

  onNearingChallenge = challenge => {
    console.log('Got challenge', challenge);
    this.setState({
      currentPage: 'camera',
      currentChallenge: challenge,
    });
  }

  showMap = () => {
    this.setState({
      currentPage: 'map',
    });
  }

  showHunt = () => {
    this.setState({
      currentPage: 'hunt',
    });
  }

  showCamera = () => {
    this.setState({
      currentPage: 'camera',
    });
  }

  render() {
    if (this.state.currentPage == 'map') {
      return (<Map
        onNearingChallenge={this.onNearingChallenge}
      ></Map>)
    } else if (this.state.currentPage == 'hunt') {
      return (<Hunt
        goToMap={this.showMap}
        goToCamera={this.showCamera}
        huntImg={this.state.currentChallenge.img}
      ></Hunt>)
    } else if (this.state.currentPage == 'camera') {
      return (<CameraComponent
          goToHunt={this.showHunt}
          challenge={this.state.currentChallenge}
        ></CameraComponent>)
    } else {
      console.log('Bad state ' + this.state.currentPage);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
