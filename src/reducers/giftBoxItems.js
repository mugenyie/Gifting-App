const giftBoxItems = (state =[], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(boxItem => boxItem.id !== action.payload.id)
        case 'CLEAR_CART':
            state.length = 0
            return state
    }

    return state;
}

export default giftBoxItems;