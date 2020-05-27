import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  surface: {
    height: 220,
    width: 220,
    elevation: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    height: 220,
    width: 220,
  },

  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  playContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    fontSize: 24,
    marginRight: 20,
    color: '#000',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default styles;
