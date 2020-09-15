import { connect } from 'react-redux';
import PackList from '../components/PackList';
import { packListQuery, submitQuery, } from '../actions';

const mapStateToProps = (state) => ({
    packList: state.packList,
    isLoading: state.isLoading,
    pageToggle: state.pageToggle,
    queryFilters: state.queryFilters,
});

const mapDispatchToProps = (dispatch) => ({
  packListQuery: () => dispatch(packListQuery())
});
export default connect(mapStateToProps)(PackList);
