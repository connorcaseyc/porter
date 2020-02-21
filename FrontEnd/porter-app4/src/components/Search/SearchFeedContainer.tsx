import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { updateCurrentProfile } from '../../action-mappers/profile-action';
import { SearchFeed } from './SearchFeed'; 

const mapStateToProps = (state:IState) => {
    return {
        profileMessage:state.profileState.profileMessage
    }
}

const mapDispatchToProps = {
    updateCurrentProfile
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchFeed)