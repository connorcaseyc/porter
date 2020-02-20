import {ProfileComponent} from './ProfileComponent';
import { IState } from '../../reducers';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) =>{
    return{
        user: state.userState.currentUser //grabbing the current user 
    }
}

export default connect(mapStateToProps)(ProfileComponent)