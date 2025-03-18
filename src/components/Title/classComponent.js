import React from 'react';
import {Text} from 'react-native';
import styles from './style';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || 'Default Text', 
    };
  }

  OnPress = () => {
    this.setState({
      text: 'New Text',
    });
  };

  componentDidMount(){}
  componentDidUpdate(){}
  componentWillUnmount(){}


  render() {
    return (
      <Text onPress={this.OnPress} style={styles.title}>
        {this.state.text} 
      </Text>
    );
  }
}

export default Title;
