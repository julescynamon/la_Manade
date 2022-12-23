import { API_URL } from '../../config/config';
import axios from 'axios';

export async function getHebergements() {
    const query = `
    query {
        hebergements {
            data {
                attributes {
                    title
                    content
                    image {
                        data {
                            attributes {
                            formats 
                            }
                        }
                    }
                }
            }
        }
    }`;

    const options = {
        url: `${API_URL}/graphql`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ query }),
    };

    const response = await axios(options);
    const hebergements = response.data.data.hebergements.data;
    return hebergements;
}
