import { connect } from "react-redux";
import Body from "./Body";
import { bindActionCreators } from "redux";

export default function Body_Wrapper(){
    return(
        <Body />
    )
}

function mapStateToProps(state){
    return function(state){
        return {
            
        }
    }
}