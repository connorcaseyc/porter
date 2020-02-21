import { connect } from "react-redux";
import { IState } from "../../reducers";
import { SignUpComponent } from "./SignUpComponent";
import { createNewUser } from '../../action-mappers/signup-action'

const mapStateToProps = (state:IState)=>{
    return {
        signupMessage: state.userState.signupMessage
    }
}

const mapDispatchToProps = {
    createNewUser
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent)