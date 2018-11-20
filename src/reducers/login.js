import { LOGIN, REGISTER } from "../constants/login";

const initialState = {
    users: [
        {
            id: 1234,
            name: 'Аноним'
        },
        {
            id: 1235,
            name: 'George',
            last_name: 'Markosov',
            email: 'george@mail.com',
            sex:'male',
        }
    ]
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                users: [
                    ...state.users
                ]
            }
        case REGISTER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload,
                ]
            }
        default: return state;
    }
}
