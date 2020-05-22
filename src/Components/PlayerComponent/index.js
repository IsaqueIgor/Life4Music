import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');

export default class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.0,
      maxValue: 0.0,
    };
  }

  goBack = () => {
    this.props.navigation.navigate('Home');
  };

  componentDidMount() {
    this.setState({
      maxValue: this.props.item.duration / 60,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <TouchableOpacity style={styles.headerButton} onPress={this.goBack}>
            <Icon name="left" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{height: height + 60}}>
            <Surface style={styles.surface}>
              <Image source={this.props.item.img} style={styles.img} />
            </Surface>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.subTitle}>{this.props.item.subTitle}</Text>
              <TouchableOpacity style={styles.btn}>
                <Icon name="play" size={30} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Queue</Text>
          </View>
        </ScrollView>

        <View style={styles.main}>
          <Slider
            value={this.state.value}
            minimumValue={0.0}
            maximumValue={this.state.maxValue}
            onValueChange={(value) => this.setState({value})}
            thumbStyle={{backgroundColor: '#2b3FD0', height: 12, width: 12}}
            thumbTintColor="red"
            maximumTrackTintColor="#e5e5e5"
            minimumTrackTintColor="#8b3FD0"
            trackStyle={{backgroundColor: 'red', height: 1}}
          />
          <View style={styles.actions}>
            <Icon name="swap" size={35} color="#6C2FD3" />
            <Icon name="stepbackward" size={35} color="#6C2FD3" />
            <Icon name="play" size={35} color="#6C2FD3" />
            <Icon name="stepforward" size={35} color="#6C2FD3" />
            <Icon name="sync" size={35} color="#6C2FD3" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
  btn: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#6C2FD3',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    height: 60,
    padding: 10,
    paddingTop: 0,
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
  },
});
