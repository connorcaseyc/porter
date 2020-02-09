import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { pokemonReducer } from './pokemon-reducer';

export interface IUserState {
    currentUser:any
    loginMessage:string
}

export interface IPokemonState {
    allPokemon:any[]
}

export interface IState {
    userState: IUserState
    pokemonState: IPokemonState
}

export const state = combineReducers<IState>({
    userState:loginReducer,
    pokemonState:pokemonReducer
})