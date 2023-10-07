import requests

apis = {
    'data.gov': {
        'url': 'https://catalog.data.gov/api/3/action/package_search',
        'parameters': {
            'query': 'q',
            'limit': 'rows',
            'skip': 'start'
        }
    }
}

def grab_from_data_gov(query: str, skip: int = 0, limit: int = 10):
    url = apis['data.gov']['url']
    parameter_names = apis['data.gov']['parameters']
    parameters = {
        parameter_names['query']: query,
        parameter_names['limit']: limit,
        parameter_names['skip']: skip
    }

    response = requests.get(url, params=parameters)
    data = response.json()

    # Extract specific fields from the response
    results = []
    for result in data['result']['results']:
        entry = {
            'id': result['id'],
            'title': result['title'],
            'url': result['resources'][0]['url'],  # Assuming the URL is in the first resource, adjust if needed
            'short_description': result['notes'],
            'organization_name': result['organization']['name'],
            'photo': result['organization']['image_url']
        }
        results.append(entry)

    return results

def search_query(query: str ,skip: int = 0, limit: int = 10):
    return grab_from_data_gov(query, skip, limit)

if __name__ == "__main__":
    # store the results in a file
    import json
    with open('results.json', 'w') as f:
        json.dump(search_query('covid'), f, indent=4)
