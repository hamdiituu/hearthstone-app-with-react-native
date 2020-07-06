import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDetailCards} from './redux/actions';


class CardDetailScreen extends React.Component {
    fetchDetailCards = name => {
        this.props.fetchDetailCards(name);
        console.log('Detail Cards :', this.props.detailCard);
        console.log('Detail Cards Error :', this.props.detailCardError);
        //console.log('Data Getir');
      };
  render() {
    return (
      <View>
        <Text>Card Detail Screen</Text>
        <TextInput
          onChangeText={name => this.fetchDetailCards(name)}
          style={{borderColor: 'red', borderWidth: 1, height: 35}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailCard: state.CardDetailScreenReducer.detailCard,
    detailCardError: state.CardDetailScreenReducer.detailCardError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchDetailCards,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetailScreen);
