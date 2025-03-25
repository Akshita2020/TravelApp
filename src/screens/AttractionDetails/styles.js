import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  conatiner: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
    margin: 16,
  },
  iconConatiner: {
    backgroundColor: 'white',
    borderRadius: 50,
    margin: 10,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
    paddingHorizontal: 4,
  },
  miniImage: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  moreImage: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    height: 40,
    width: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    color: '#000',
  },
  city: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 8,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    padding: 16,
    marginBottom: 60,
  },
});

export default styles;
