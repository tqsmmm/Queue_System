import httpRequest from '../server';

export function apiGetList() {
    return httpRequest({
        url: '/api/user/get_list',
        method: 'GET',
    });
}
