import axios from 'axios';

import { API_URL } from '../../config/config';

// get the last actualities
export async function getActivities() {
    const query = `
    query {
        activities {
            data{
                attributes {
                title
                subtitle
                content
                image {
                    data{
                    attributes{
                        formats
                    }
                    }
                }
                description
                slug
                }
            }
            }
        } 
    `;
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ query }),
    };

    const response = await axios(`${API_URL}/graphql`, options);
    const activities = response.data.data.activities;
    return activities;
}
