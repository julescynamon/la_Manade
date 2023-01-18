import axios from 'axios';

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
                        alternativeText
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

    const response = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
        options
    );
    const activities = response.data.data.activities;
    return activities;
}
