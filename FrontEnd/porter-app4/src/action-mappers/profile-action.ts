import { apiProfile } from '../remote/project2api';

export const currentUTypes = {
    SUCCESS: 'User accepted',
    UNSUCCESSFUL: 'User not found'
}

export const updateCurrentProfile = (username:string) => async (dispatch:any) => {
    let profresponse = await apiProfile(username)
    if(profresponse.profbody) {
        dispatch({
            type:currentUTypes.SUCCESS,
            payload: {
                currentProfile:profresponse.profbody
            }
        })
    } else {
        dispatch({
            type:currentUTypes.UNSUCCESSFUL,
            payload: {
                profileMessage: profresponse.profileMessage
            }
        })
    }
}