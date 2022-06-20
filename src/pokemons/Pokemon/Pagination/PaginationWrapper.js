import { connect } from "react-redux";
import Pagination from "./Pagination";
import { bindActionCreators } from "redux";
import { nextPage_AC, prevPage_AC } from "../../store/store";
function mapStateToProps(state){
    return {
        currentPage: state.currentPage
    }
}

// Вариант 1
// function mapDispatchToProps(dispatch){
//     return {
//         nextPage: bindActionCreators(nextPage_AC, dispatch),
//         prevPage: bindActionCreators(prevPage_AC, dispatch)
//     }
// }


// Вариант 2
const mapDispatchToProps = {
    nextPage: nextPage_AC,
    prevPage: prevPage_AC,
}

const PaginationWrapper = connect(mapStateToProps, /*mapDispatchToProps*/)(Pagination)
export default PaginationWrapper