import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

class Options extends Component {
  state= { questions: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ questions: response.data }));
    console.log(this.state);
  }

  renderQuestions() {
    return this.state.questions.map(question =>
      <TouchableOpacity key={question.title} style={styles.viewStyle}>
        <Text style={styles.textstyle}>{question.title}</Text>
        </TouchableOpacity>

    );
  }
  render() {
    return (
      <View >
          {this.renderQuestions()}
      </View>
    );
  }
}

const styles = {
  textstyle: {
      fontSize: 15,
      color: '#ffffff',
      justifyContent: 'flex-start',
      textAlign: 'left',
      alignSelf: 'stretch',
      paddingLeft: 40,
      margin: 5


  },
  viewStyle: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#00b894',
    alignItems: 'center',
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 6
  }

};
export default Options;
