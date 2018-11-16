export const login = (name) => dispatch => {
        const payload = {
            id: Date.now(),
            name
        };
        dispatch({ type: 'LOGIN', payload: payload })
}
