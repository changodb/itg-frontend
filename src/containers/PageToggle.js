import { connect } from 'react-redux';
import PageToggle from '../components/PageToggle';
import { viewChange } from '../actions';

const mapStateToProps = (state) => ({
  pageToggle: state.pageToggle
});

const mapDispatchToProps = (dispatch) => ({
  onViewChange: (value) => dispatch(viewChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageToggle);
