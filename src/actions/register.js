import { REGISTER } from "../constants/register";

export const register = (value) => dispatch => {
    const payload = {
        id: Date.now(),
        ...value
    }
    dispatch({ type: REGISTER, payload: payload })
}
