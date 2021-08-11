const initialStore = {
    isFetching: false,
    logged: false,
    error: '',
    usuario: undefined,
}
const LOGIN_FETCHING = 'LOGIN_FETCHING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGOUT_USER = 'LOGOUT_USER'


export const loginFetching = () => {
    return {
        type: LOGIN_FETCHING,
    }
}

export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response,
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error,
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginFetching());
        fetch("https://backend-final-2112.herokuapp.com/auth/login", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            }).then(async (response) => {
                const data = await response.json()
                if(response.status === 200) {
                    dispatch(loginSuccess(data))
                } else {
                    dispatch(loginError(data.message))
                }
              })
              .catch((error) => {
                dispatch(loginError(error.message))
              })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutUser());
    }
}

export const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case LOGIN_FETCHING: {
            return {
                ...store,
                isFetching: true,
                error: ''
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...store,
                isFetching: false,
                user: action.payload,
                logged: true,
                error: ''
            };
        }
        case LOGIN_ERROR: {
            return {
                ...store,
                isFetching: false,
                error: action.payload,
                logged: false,
            };
        }
        case LOGOUT_USER: {
            return {
                ...store,
                isFetching: false,
                logged: false,
                error: ''
            };
        }
        default:
            return store;
    }
}