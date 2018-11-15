const initialState = [
    {
        id: 1234,
        name: 'Аноним'
    },
    {
        id: 1235,
        name: 'George',
        last_name: 'Markosov',
        email: 'george@mail.com',
        sex: 'male',
    }
];

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
            ]
        case 'REGISTER':
            return [
                ...state,
                action.payload,
            ]
        default: return state;
    }
}
