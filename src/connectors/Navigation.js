import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state.navigation;
};

const connectNavigation = Component => connect(mapStateToProps)(Component);

export default connectNavigation;
