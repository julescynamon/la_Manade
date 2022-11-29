import axios from 'axios';

import { API_URL } from '../../config/config';

// get the last actualities
export function getActivities() {
    return axios.get(`${API_URL}/api/activities?populate=*`).then((res) => res.data);
}
