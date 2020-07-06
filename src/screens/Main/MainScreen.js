import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllCards} from './redux/actions';
class MainScreen extends React.Component {
  state = {
    allCardsData: undefined,
  };

  fetchAllCards = () => {
    this.props.fetchAllCards();
    console.log('All Cards :', this.props.allCards);
    console.log('All Cards Error :', this.props.allCardsError);
    console.log('Data Getir');
  };
  render() {
    return (
      <View>
        <Text>Main Screen</Text>
        <Button
          title="Go to detail"
          onPress={() => this.props.navigation.navigate('CardDetail')}
        />
        <Button
          title="Go to search"
          onPress={() => this.props.navigation.navigate('CardSearch')}
        />
        <Button title="Data Getir" onPress={() => this.fetchAllCards()} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCards: state.MainScreenReducer.allCards,
    allCardsError: state.MainScreenReducer.allCardsError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchAllCards,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
