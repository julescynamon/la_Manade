import axios from 'axios';

export function getGoogleReviews() {
    return axios
        .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=review&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEYS}&language=fr`
        )
        .then((res) => res.data);
}
