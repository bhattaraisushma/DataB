import requests
import aiohttp
import asyncio

async def fetch(session, url, params):
    async with session.get(url, params=params) as response:
        return await response.json()

async def grab_from_data_gov(query: str, skip: int = 0, limit: int = 10, start_time: str = None, end_time: str = None):
    url = 'https://catalog.data.gov/api/3/action/package_search'

    parameters = {
        'q': query,
        'rows': limit,
        'start': skip
    }

    # Create a list to store filter queries
    filter_queries = []

    # Add start and end time filters if provided
    if start_time and end_time:
        filter_queries.append(f'metadata_created:[{start_time}T00:00:00Z TO {end_time}T23:59:59Z]')
        filter_queries.append(f'metadata_modified:[{start_time}T00:00:00Z TO {end_time}T23:59:59Z]')

    # Join filter queries with spaces and add to parameters
    if filter_queries:
        parameters['fq_list'] = filter_queries

    async with aiohttp.ClientSession() as session:
        response = await fetch(session, url, params=parameters)
        data = response.get('result', {}).get('results', [])

        # Extract specific fields from the response
        results = []
        for result in data:
            entry = {
                'id': result['id'],
                'title': result['title'],
                'url': result['resources'][0]['url'],  # Assuming the URL is in the first resource, adjust if needed
                'short_description': result['notes'],
                'organization_name': result['organization']['name'],
                'photo': result['organization']['image_url'],
                'created': result['metadata_created']
            }
            results.append(entry)

        return results


async def get_data_by_id(id: str):
    url = f'https://catalog.data.gov/api/3/action/package_show?id={id}'

    async with aiohttp.ClientSession() as session:
        response = await fetch(session, url, params={})
        data = response.get('result', {})

        # Extract specific fields from the response
        entry = {
            'id': data['id'],
            'title': data['title'],
            'url': data['resources'][0]['url'],  # Assuming the URL is in the first resource, adjust if needed
            'short_description': data['notes'],
            'organization_name': data['organization']['name'],
            'photo': data['organization']['image_url'],
            'created': data['metadata_created']
        }

        return entry

async def search_query(query: str ,skip: int = 0, limit: int = 10, location: str = None, start_time: str = None, end_time: str = None):
    # return data from grab_from_data_gov(query, skip, limit, start_time, end_time)
    data_gov = await grab_from_data_gov(query, skip, limit, start_time, end_time)
    return data_gov

if __name__ == "__main__":
    # get data from search_query and store it to file
    import json
    import time
    start_time = time.time()
    data = asyncio.run(search_query(query="covid", skip=0, limit=10, location=None, start_time=None, end_time=None))
    print("--- %s seconds ---" % (time.time() - start_time))
    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)
    
