import { ADD_ITEM } from './types';

function addItem(item){
    return {
        type: ADD_ITEM,
        newItem: item
    }
}

const actionCreators = {
    addItem
}

export { actionCreators }
