import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  header: {
    top: 10,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    margin: 24,
  },
  title: {
    fontSize: 24,
    color:'#000 0',
  },
  back: {
    width: 50,
    height: 50,
    margin: 16,
  },
});

export default styles;
