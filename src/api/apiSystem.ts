import httpRequest from '../server';

type User = {
    user_id?: string;
    user_name?: string;
    user_pwd?: string;
};

export function apiLogin(param: User) {
    return httpRequest({
        url: '/api/login',
        method: 'POST',
        data: param,
    });
}
