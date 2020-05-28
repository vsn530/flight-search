import { createStore, combineReducers } from 'redux';
import flightReducer from '../reducers/flightsReducer';
import searchReducer from '../reducers/formDataReducer';
import userReducer from '../reducers/userReducer';


export default () => {
    const store = createStore(combineReducers({
        flightsData:flightReducer,
        searchData:searchReducer,
        userData:userReducer
    }))
    return store;
}
