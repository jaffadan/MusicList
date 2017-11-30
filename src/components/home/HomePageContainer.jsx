import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { incrementProgress, decrementProgress } from '../../actions/progress.js';
import HomePage from './HomePage.jsx';

export function HomePageContainer(props) {
  const{ decrementProgressAction, incrementProgressAction} = props;
  return (
    <HomePage
      incrementFunction={incrementProgressAction}
      decrementFunction={decrementProgressAction}
    />
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePageContainer);