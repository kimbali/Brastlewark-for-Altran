import gnomes from '../logic/gnomes';
import { FETCH_GNOMES, FETCH_GNOME_BY_ID } from './types';

const inhabitants = gnomes

export const fetchGnomes = () => {

    return {
        type: FETCH_GNOMES,
        gnomes: inhabitants
    }
}

export const fetchGnomeById = id => {

    const gnomeFound = inhabitants.Brastlewark.find(gnome => gnome.id == id)

    return {
        type: FETCH_GNOME_BY_ID,
        gnome: gnomeFound
    }
}