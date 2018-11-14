export const register = (name, last_name, email, sex) => dispatch => {
    const payload = {
        id: Date.now(),
        name,
        last_name,
        email,
        sex,
    };
    dispatch({ type: 'REGISTER', payload: payload })
}
