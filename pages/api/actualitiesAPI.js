import axios from 'axios';

import { API_URL } from '../../config/config';

// get the last actualities
export function getActualities() {
    return axios.get(`${API_URL}/api/actualities?populate=*`).then((res) => res.data);
}

// get one actuality by id
export function getActuality(id) {
    return axios.get(`${API_URL}/actualities/${id}`).then((res) => res.data);
}