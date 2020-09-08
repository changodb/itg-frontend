import { connect } from 'react-redux';
import PackList from '../components/PackList';
import { packListQuery } from '../actions';

const mapStateToProps = (state) => ({
    packList: state.packList,
    isLoading: state.isLoading,
    pageToggle: state.pageToggle
});

const mapDispatchToProps = (dispatch) => ({
  packListQuery: () => dispatch(packListQuery())
});
export default connect(mapStateToProps)(PackList);
