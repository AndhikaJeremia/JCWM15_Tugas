// import combineReducers from redux
import {
    combineReducers,
} from 'redux'
// import reducer
import LoginUser_Reducer from './Login-user_reducer'

const AllReducers = combineReducers({
    user: LoginUser_Reducer
})

export default AllReducers