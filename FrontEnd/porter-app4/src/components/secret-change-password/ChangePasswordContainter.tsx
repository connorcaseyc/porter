import {ChangePassword} from './ChangePasswordComp';
import {IState} from '../../reducers';
import {connect} from 'react-redux';
import {changeUserPassword} from '../../action-mappers/changePass-action'
const mapStateToProps = (state:IState) =>{
    return{
          user: state.userState.currentUser
    }
}

const mapDispatchToProps = {
    changeUserPassword
}
export default connect(mapStateToProps)(ChangePassword)