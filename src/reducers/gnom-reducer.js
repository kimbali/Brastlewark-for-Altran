import { FETCH_GNOMES, FETCH_GNOME_BY_ID } from '../actions/types';

const INITIAL_STATE = {
    gnomes: {
        data: []
    },
    gnome: {
        data: {}
    }
}

export const gnomReducer = (state = INITIAL_STATE.gnomes, accion) => {
    switch (accion.type) {
        case FETCH_GNOMES:
            return {...state, data: accion.gnomes}

        default:
            return state;
    }
}

export const selectedGnomeReducer = (state = INITIAL_STATE.gnome, accion) => {
    switch (accion.type) {
        case FETCH_GNOME_BY_ID:
            return {...state, data: accion.gnome}

        default:
            return state;
    }
}