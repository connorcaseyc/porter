import { connect } from 'react-redux';
import { PostSubmit } from './postSubmit';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(PostSubmit)