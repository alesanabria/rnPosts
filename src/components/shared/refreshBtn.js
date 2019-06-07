import React, { PureComponent } from 'react';
import { TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { getPosts } from 'rnPosts/src/actions/posts';

class RefreshBtn extends PureComponent {

  handleRefresh = () => {
    this.props.dispatch(getPosts(true));
  }

  render() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.handleRefresh}>
        <IonIcons name={Platform.OS == "ios" ? "ios-refresh" :"md-refresh"} color="#fff" size={24} />
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  btn: {
    paddingRight: 16
  }
});

export default connect(null)(RefreshBtn);
