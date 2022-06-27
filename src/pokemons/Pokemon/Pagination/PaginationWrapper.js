import { connect } from "react-redux";
import Pagination from "./Pagination";
import { nextPage, prevPage } from "../../store/toolkitStore";
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
    nextPage: nextPage,
    prevPage: prevPage,
}

const PaginationWrapper = connect(mapStateToProps, /*mapDispatchToProps*/)(Pagination)
export default PaginationWrapper