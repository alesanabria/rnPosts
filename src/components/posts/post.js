import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

class Post extends PureComponent {
  render() {
    const { post, goToPost } = this.props;

    return (
      <TouchableOpacity onPress={goToPost} style={styles.container}>
        {!post.read && <View style={styles.dot} />}

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
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 16
    // borderBottomColor: '#E4E4E4'
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    marginLeft: 8,
    borderBottomWidth: 1,
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
    borderRadius: 10,
  },
  arrow: {
    marginRight: 16
  }
});

export default Post;