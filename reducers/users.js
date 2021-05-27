const initialState = [
];

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS': {
            console.log('reducer: ', action.payload);
            return [
                ...action.payload
            ];
        }
        case 'CHECK_USERS': {
            console.log('reducer check users: ', action.payload, state);
            return [
                // ...action.payload
                ...state
            ];
        }
        case 'POST_USERS': {
            console.log('reducer Post users: ', action.payload, state);
            const newState = [...state];
            newState.push(action.payload);
            console.log('reducer Post users: ', action.payload, newState);
            return [
                ...newState
            ];
        }
        default:
            return state;
    }
}

export default usersReducer;