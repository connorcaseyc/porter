import { connect } from 'react-redux';
import { FeedComponent } from './FeedComponent'
import { IState } from '../../reducers';
import { getAllPokemon } from '../../action-mappers/pokemon-actions';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser,
        allPokemon: state.pokemonState.allPokemon
    }
}

const mapDispatchToProps = {
    getAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedComponent)