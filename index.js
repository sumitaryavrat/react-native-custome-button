import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';
const INITIAL_TOP = Platform.OS === 'ios' ? -80 : -60;

export default class CustomeButton extends Component {
  static propTypes = {
   
  };

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render = () => {
    const {
     
    } = this.props;
    return (<TouchableOpacity style={styles.container} onPress={()=>console.log('Dependency working')}><Text style={{color:'black',fontSize:20,fontWeight:'bold',alignSelf:'center'}}>costomeButton</Text></TouchableOpacity>);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    position: 'absolute',
    elevation: 2,
    shadowRadius: 5,
    
  },
  navWrapper: {
    width: Dimensions.get('window').width
  },
  nav: {
    ...Platform.select({
      android: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth
      }
    }),
    flex: 1,
    flexBasis: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    ...Platform.select({
      ios: { height: 30 },
      android: { height: 50 }
    }),
    width: Dimensions.get('window').width - 30
  }
});
