import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSearchCards} from './redux/actions';
class CardSearchScreen extends React.Component {
 
     fetchSearchCards =(name)=> {
        this.props.fetchSearchCards(name);
        console.log('Search Cards :', this.props.searchCards);
        console.log('Search Cards Error :', this.props.searchCardsError);
        //console.log('Data Getir');
    }

  render() {
    return (
      <View>
        <Text>Card Search Screen</Text>
        <TextInput onChangeText={name=>this.fetchSearchCards(name)} style={{borderColor:'red',borderWidth:1,height:35}} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchCards: state.CardSearchScreenReducer.searchCards,
    searchCardsError: state.MainScreenReducer.searchCardsError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSearchCards,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardSearchScreen);
