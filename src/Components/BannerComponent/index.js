import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');


export default class BannerComponent extends Component {
  constructor(props) {
    super(props);
  }

  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  render(){
    console.disableYellowBox = true; //Disable warnings

    let banners = [
      {
        title: 'Metal City',
        subTitle: 'Dead April',
        img: require('../../assets/b1.jpg'),
        duration: 201.6,
      },
      {
        title: 'Return To Forever',
        subTitle: '',
        img: require('../../assets/b2.jpg'),
        duration: 201.6,
      },
      {
        title: 'Your Love Remains',
        subTitle: 'The Rock Music',
        img: require('../../assets/b4.jpg'),
        duration: 191.2,
      },
    ];

    return(
      <View style={styles.container}>
        <FlatList
          data={banners}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={styles.banner} key={index}>
              <ImageBackground source={item.img} style={styles.bannerImage}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                      this.playSong(item);
                  }}>
                  <Icon name='play' size={18} color='#000' />
                  <Text style={styles.text}>Play Now</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 200,
    backgroundColor: '#fff',
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 200,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
});
