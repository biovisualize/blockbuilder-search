import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect'
import ActionCreators from '../actions/actionCreators';


const App = React.createClass({
	componentDidMount() {
    console.log("commencing search")
    this.props.actions.getSearch({ type: "text", text: "circle", size: 100})
	},
	render() {
		return (
			<div >
				SEARCH
      </div>
    )
  }
})

const select = (state) => {
  /*
	let gistsFiltered = gistFilter(state);
	return {
		...state, gistsFiltered
  };
  */
  return state
}
const mapDispatchToProps = (dispatch) => {
	let actions = bindActionCreators(ActionCreators, dispatch);
	return {
		actions
	};
}

export default connect(select, mapDispatchToProps)(App);
