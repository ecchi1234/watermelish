import React, {Component } from 'react';

class Todoitem extends Component {
    render(){
        
        return (
            <div className ="Todoitem">
                <p>{this.props.title}</p>
            </div>
        );
    }
}
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FlexDimensionsBasics = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={styles.container}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>Minigame</Text>
        </View>
        <View style={{flex: 3}}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Trắc nghiệm</Text>
            </View>
            <View style={styles.game}>
              <View style={{flex: 2}}>
                <Text style={styles.text}>Ảnh</Text>
              </View>
              <View style={{flex: 3}}>
                <Text style={styles.text}>Điểm cao</Text>
              </View>
            </View>
        </View>
        <View style={{flex: 3}}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Ghép cặp</Text>
            </View>
            <View style={styles.game}>
              <View style={{flex: 2}}>
                <Text style={styles.text}>Ảnh</Text>
              </View>
              <View style={{flex: 3}}>
                <Text style={styles.text}>Điểm cao</Text>
              </View>
            </View>
        </View><View style={{flex: 3}}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Điền từ</Text>
            </View>
            <View style={styles.game}>
              <View style={{flex: 2}}>
                <Text style={styles.text}>Ảnh</Text>
              </View>
              <View style={{flex: 3}}>
                <Text style={styles.text}>Điểm cao</Text>
              </View>
            </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 42,
    color: '#84D037',
  },
  text: {
    fontSize: 15,
    lineHeight: 28,
    display: 'flex',
    alignItems: 'center',
    color: '#2D2727',
  },
  game: {
    flex: 4,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 10,
  },
  red: {
    color: 'red',
  },
});


export default FlexDimensionsBasics;