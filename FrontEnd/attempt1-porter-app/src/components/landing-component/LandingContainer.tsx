import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { LandingComponent } from './LandingComponent';
import { updateCurrentUser } from '../../action-mappers/login-action';

const mapStateToProps = (state:IState) => {
    return {
        loginMessage:state.userState.loginMessage
    }
}

const mapDispatchToProps = {
    updateCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent)