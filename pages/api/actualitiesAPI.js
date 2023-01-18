import axios from 'axios';

// get the last actualities
export async function getActualities() {
    const query = `
    query {
        actualities{
            data{
                attributes{
                title
                content
                image{
                    data {
                    attributes {
                        alternativeText
                        formats
                    }
                    }
                }
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
    const actualities = response.data.data.actualities.data;
    return actualities;
}
