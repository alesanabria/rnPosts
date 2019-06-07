import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';

class Tabs extends Component {
  state = {
    tab: 0
  }

  changeTab = (tab) => {
    this.setState({ tab });
  }

  render() {
    const { tab } = this.state;

      return (
        <View style={{ flex: 1 }}>
          <View style={styles.tabs()}>
            <TouchableOpacity
              style={[styles.tab(), tab == 0 && styles.selectedTab(), Platform.OS == 'ios' && styles.borderRight]}
              onPress={this.changeTab.bind(null, 0)}
            >
              <Text style={[styles.tabText(), tab == 0 && styles.selectedText()]}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab(), tab == 1 && styles.selectedTab()]}
              onPress={this.changeTab.bind(null, 1)}
            >
              <Text style={[styles.tabText(), tab == 1 && styles.selectedText()]}>Favorites</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            {this.props.children.map((content, i) => {
              if(i == tab)  return content
            })}
          </View>
        </View>
      )
    }

}

const styles = {
  contentContainer: {
    flex: 1
  },
  tabs: () => {
    if(Platform.OS == 'ios') {
      return {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#4DAB35',
        borderRadius: 4,
        height: 34,
        margin: 8
      }
    }

    if(Platform.OS == 'android') {
      return {
        flexDirection: 'row',
        height: 42,
        elevation: 8
      }
    }
  },
  tab: () => {
    if(Platform.OS == 'ios') {
      return {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    }

    if(Platform.OS == 'android') {
      return {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4DAB35',
        borderBottomWidth: 2,
        borderColor: '#4DAB35',
        elevation: 8
      }
    }
  },
  selectedTab: () => {
    if(Platform.OS == 'ios') {
      return {
        backgroundColor: '#4DAB35'
      }
    }
    if(Platform.OS == 'android') {
      return {
        borderBottomColor: '#fff',
      }
    }
  },
  tabText: () => {
    if(Platform.OS == 'ios') {
      return {
        color: '#4DAB35'
      }
    }
    if(Platform.OS == 'android') {
      return {
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.6)'
      }
    }
  },
  selectedText: () => {
    if(Platform.OS == 'ios') {
      return {
        color: '#fff'
      }
    }
    if(Platform.OS == 'android') {
      return {
        color: 'rgba(255, 255, 255, 1)'
      }
    }
  },
  borderRight: {
    borderRightWidth: 1, borderRightColor: '#4DAB35'
  }
};

export default Tabs;