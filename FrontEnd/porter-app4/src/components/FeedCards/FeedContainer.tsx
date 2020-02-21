import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { CardRow } from './CardRow';
import { updateCurrentProfile } from '../../action-mappers/profile-action';

const mapStateToProps = (state:IState) => {
    return {
        profileMessage:state.profileState.profileMessage
    }
}

const mapDispatchToProps = {
    updateCurrentProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRow)