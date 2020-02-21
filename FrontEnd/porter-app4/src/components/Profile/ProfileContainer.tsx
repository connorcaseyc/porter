import { connect } from 'react-redux';
import { IState, IProfileState } from '../../reducers';
import { ProfileComponent } from './ProfileComponent';

const mapStateToProps = (state:IProfileState) => {
    return {
        currentProfile:state.currentProfile.user_posts
    }
}

export default connect(mapStateToProps)(ProfileComponent)