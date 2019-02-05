import * as redux from 'redux';
import { gnomReducer, selectedGnomeReducer } from './gnom-reducer';

export const init = () => {
    const reducer = redux.combineReducers({
        gnomes: gnomReducer,
        gnome: selectedGnomeReducer
    })

    const store = redux.createStore(reducer)

    return store
}
