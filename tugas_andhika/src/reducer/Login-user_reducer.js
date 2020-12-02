// make initial state
const INTIAL_STATE = {
    username: '',
    email: '',
    password: '',
}

// make reducer for users
const LoginUser_Reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            }
        case 'LOG_OUT':
            return INTIAL_STATE
        default :
            return state
    }
}

export default LoginUser_Reducer