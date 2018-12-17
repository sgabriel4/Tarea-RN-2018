import { ADD_ITEM } from './types';

const initialState = {
    items: [
        {
            title: 'Tarea 1',
            description: 'Tarea de Ionic',
            state: true
        },
        {
            title: 'Tarea 2',
            description: 'Tarea de Android',
            state: false
        },
        {
            title: 'Tarea 3',
            description: 'Tarea de React Native',
            state: false
        },
        {
            title: 'Tarea 4',
            description: 'Tarea de Navidad',
            state: false
        },
    ]
}

function addItemToList(state, newItem) {
    state.items.push(newItem);
    return {
        ...state,
        items: state.items
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
            return addItemToList(state, action.newItem);
        default:
            return state;
    }
}

export default reducer;