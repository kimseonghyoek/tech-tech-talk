export const initState = {
    userData: {
        email: "",
        nickname: "",
    }
}

export const LOG_IN_REQUEST: string = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS: string = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE: string = 'LOG_IN_FAILURE' as const;

export const loginRequestAction = () => {
    return {
        type: LOG_IN_REQUEST,
    }
};

export const loginSuccessAction = (data: object) => {
    return {
        type: LOG_IN_SUCCESS,
        data
    }
};

export const loginFailureAction = (data: object) => {
    return {
        type: LOG_IN_FAILURE,
        data
    }
};