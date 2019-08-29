const initialState = {
    id: null,
    username: null,
    profile_pic: null
}

const SET_USER = 'SET_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            const { id, username, profile_pic } = payload
            return {...state, id, username, profile_pic}
            default: return state
        }   
    
}