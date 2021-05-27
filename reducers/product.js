const initialState = {};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRODUCT': {
            // console.log('reducer: ', action.payload);
            // const newProductList = [...action.payload];
            // console.log(action.payload);

            return ({
                ...action.payload
            })
        }
        default:
            return state;
    }
}

export default productReducer;