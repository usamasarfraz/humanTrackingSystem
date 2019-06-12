import {createStore,combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import userReducer from './reducers/userReducer';
import connectionStatusReducer from './reducers/connectionStatusReducer';
import resetPasswordReducer from './reducers/resetPasswordReducer';

let AllReducers = combineReducers({userReducer,connectionStatusReducer,resetPasswordReducer});

const persistConfig = {
    key: 'test8',
    storage:AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, AllReducers)
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
export { store, persistor };