export const AddProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    }
}

export const RemoveProduct = (index) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: index,
    }
}

export const IncreaseProduct = (index) => {
    return {
        type: 'INCREASE_PRODUCT',
        payload: index,
    }
}

export const DecreaseProduct = (index) => {
    return {
        type: 'DECREASE_PRODUCT',
        payload: index,
    }
}

export const SetCart = (product) => {
    return {
        type: 'SET_CART',
        payload: product,
    }
}