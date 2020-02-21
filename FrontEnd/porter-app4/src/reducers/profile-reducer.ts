import { IProfileState } from '.';
import { currentUTypes } from '../action-mappers/profile-action';

const initialProfile:IProfileState = {
    currentProfile: {
        id: 0,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        user_posts: []
    },
    profileMessage: ''
}

export const profileReducer = (state = initialProfile, action:any) => {
    
    switch(action.type) {
        case currentUTypes.SUCCESS:{
            return {
                ...state,
                currentProfile:action.payload.currentProfile,
                profileMessage: 'Profile loaded'
            }
        }
        case currentUTypes.UNSUCCESSFUL: {
            return {
                ...state,
                profileMessage:action.payload.profileMessage
            }
        }
        default:
            return state;
    }
}