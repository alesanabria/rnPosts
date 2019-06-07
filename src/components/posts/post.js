import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');

class Post extends PureComponent {

  moveX = new Animated.Value(width)
  opacity = new Animated.Value(0)

  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: (event, gestureState) => false,
      onPanResponderTerminationRequest: () => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
   },
      onPanResponderMove: (e, gestureState) => {
        this.moveX.setValue(gestureState.moveX)
      },
      onPanResponderEnd: (e, gestureState) => {
        const total = -width / 1.8;

        if(Math.abs(gestureState.dx) > Math.abs(total)) {
          return this.props.onDelete();
        }

        this.moveX.setValue(width);
      },

    })

    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 250,
    }).start();

  }

  render() {
    const { post, favorite, goToPost } = this.props;
    const to = width / 1.5;

    let swipe = this.moveX.interpolate({
      inputRange: [0, to],
      outputRange: [-to, 0],
      extrapolate: "clamp",
    });

    return (

      <Animated.View style={[
        styles.container,
        {
          opacity: this.opacity,
          transform: [{ translateX: swipe }, { translateY: this.opacity }],
        }]}
        {...this._panResponder.panHandlers}
      >
      <TouchableOpacity onPress={goToPost} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {!post.read && <View style={styles.dot} />}

        {(favorite && Platform.OS == 'ios') &&
          <IonIcons
            name="ios-star"
            color="#F6E652"
            size={16}
          />
        }

        <View style={styles.wrapper}>
          <Text style={styles.title}>{post.title}</Text>
          {Platform.OS == 'ios' &&
            <IonIcons
              name="ios-arrow-forward"
              color="#A8A7AC"
              size={24}
              style={styles.arrow}
            />
          }

          {(favorite && Platform.OS == 'android') &&
            <IonIcons
              name="ios-star"
              color="#F6E652"
              size={16}
            />
          }
        </View>

        </TouchableOpacity>
        </Animated.View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomWidth: Platform.OS == 'android' ? 1 : 0,
    borderBottomColor: '#E4E4E4',
    paddingLeft: 8,
    paddingRight: 16
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    marginLeft: 8,
    borderBottomWidth: Platform.OS == 'ios' ? 1 : 0,
    borderBottomColor: '#E4E4E4'
  },
  title: {
    color: '#A8A7AC',
    marginLeft: 8,
    fontSize: 16,
    marginRight: 16,
    flex: 1
  },
  dot: {
    backgroundColor: '#2D7BF6',
    width: 10,
    height: 10,
    borderRadius: 10
  },
  arrow: {
    marginRight: 16
  }
});

export default Post;