const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT': {
            const newState = [...state];
            // const newProduct = {...action.payload, }

            let term = true;
            newState.forEach(element => {
                if(element.nameproduct == action.payload.nameproduct){
                    element.quantity += 1;
                    term = false;
                }
            });
            if( term ) {
                const objTerm = {...action.payload };
                objTerm.quantity = 1;
                newState.push(objTerm);
            }

            // newState.push(action.payload);
            console.log(action.payload);
            return ([
                ...newState
            ])
        }
        case 'REMOVE_PRODUCT': {
            const newState = [...state];
            newState.splice(action.payload,1);
            return([
                ...newState
            ])
        }
        case 'INCREASE_PRODUCT': {
            const newState = [...state];
            ++newState[action.payload].quantity;
            return([
                ...newState
            ])
        }
        case 'DECREASE_PRODUCT': {
            const newState = [...state];
            --newState[action.payload].quantity;
            if(newState[action.payload].quantity == 0) {
                newState.splice(action.payload,1);
            }
            return([
                ...newState
            ])
        }
        case 'SET_CART': {
            return [
                ...action.payload
            ];
        }
        default:
            return state;
    }
}

export default cartReducer;