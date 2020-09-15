import { connect } from 'react-redux';
import SimfileResults from '../components/SimfileResults';

const mapStateToProps = (state) => ({
    simfileResults: state.simfileResults,
    isLoading: state.isLoading,
    pageToggle: state.pageToggle,
    queryFilters: state.queryFilters,
});

export default connect(mapStateToProps)(SimfileResults);
