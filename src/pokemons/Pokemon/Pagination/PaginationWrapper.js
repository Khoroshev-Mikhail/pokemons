import { connect } from "react-redux";
import Pagination from "./Pagination";
import { bindActionCreators } from "redux";
import { nextPage_AC, prevPage_AC } from "../../store/store";
function mapStateToProps(state){
    return {
        currentPage: state.currentPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        nextPage: bindActionCreators(nextPage_AC, dispatch),
        prevPage: bindActionCreators(prevPage_AC, dispatch)
    }
}

const PaginationWrapper = connect(mapStateToProps, mapDispatchToProps)(Pagination)
export default PaginationWrapper