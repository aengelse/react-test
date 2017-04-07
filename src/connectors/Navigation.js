import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/navigation'

const mapStateToProps = (state) => {
  return state.navigation;
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

const connectNavigation = Component => connect(mapStateToProps, mapDispatchToProps)(Component);

export default connectNavigation;
