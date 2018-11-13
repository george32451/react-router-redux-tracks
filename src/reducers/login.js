const initialState = [
    {
        id: 1234,
        name: 'Аноним'
    }
];

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                action.payload,
            ]
        default: return state;
    }
}
