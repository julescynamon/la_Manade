import axios from 'axios';

const GOOGLE_API_KEYS = process.env.GOOGLE_API_KEYS;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

export function getGoogleReviews() {
    return axios
        .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=review&key=${GOOGLE_API_KEYS}&language=fr`
        )
        .then((res) => res.data);
}
