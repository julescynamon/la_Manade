import { API_URL } from '../../config/config';

export async function getHebergements() {
    const fetchParams = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `{
                hebergements {
                data{
                    attributes{
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
            }`
		})
	}

	const res = await fetch(`${API_URL}/graphql`, fetchParams);
	const {data} = await res.json();

    return data;
}