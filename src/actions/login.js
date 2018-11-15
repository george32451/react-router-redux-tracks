export const login = (name) => dispatch => {
        console.log(`Hello ${name}`)
        const payload = {
            id: Date.now(),
            name
        };
        dispatch({ type: 'LOGIN', payload: payload })
}
