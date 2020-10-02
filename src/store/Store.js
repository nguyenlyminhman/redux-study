import addReducer from './reducer/add';
import editReducer from './reducer/edit';

const redux = require('redux');

const allReducer = redux.combineReducers({
    add: addReducer,
    edit: editReducer
})
let store = redux.createStore(allReducer);

export default store;