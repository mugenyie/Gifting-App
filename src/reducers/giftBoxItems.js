const giftBoxitems = (state =[], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(boxItem => boxItem.id !== action.payload.id)
    }

    return state;
}

export default giftBoxitems;