import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';

// export const userActions = {
//     login,
//     logout,
// };

export const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    window.location.hash = '/';
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

