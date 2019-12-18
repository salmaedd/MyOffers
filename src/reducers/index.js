import listReducer from './List';
import profilReducer from './Profil';
import { combineReducers } from 'redux';

const allReducers = combineReducers(
    {
        profiles: profilReducer,
        lists: listReducer
    }
);
export default allReducers;