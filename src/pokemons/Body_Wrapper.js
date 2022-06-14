import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./store/store";
import Body from "./Body";


const Body_Wrapper = connect(mapStateToProps(), mapDispatchToProps())(Body)
export default Body_Wrapper