export const SetUsers = (obj) => {
    return {
        type: 'SET_USERS',
        payload: obj,
    }
}

export const CheckUsers = (name, email, password) => {
    return {
        type: 'CHECK_USERS',
        payload: { name, email, password },
    }
}

export const PostUsers = (name, email, password) => {
    return {
        type: 'POST_USERS',
        payload: { name, email, password },
    }
}
