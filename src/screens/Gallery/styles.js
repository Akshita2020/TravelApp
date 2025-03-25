import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginTop: 24,
  },
  backConatiner: {
    position: 'absolute',
    margin: 42,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  iconConatiner: {
    backgroundColor: 'white',
    borderRadius: 50,
    margin: 10,
  },
});

export default styles;
