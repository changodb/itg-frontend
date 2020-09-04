import { connect } from 'react-redux';
import PackList from '../components/PackList';

const mapStateToProps = (state) => ({
    packList: state.packList,
    isLoading: state.isLoading
});

export default connect(mapStateToProps)(PackList);
