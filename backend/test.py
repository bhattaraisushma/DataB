import requests

url = "https://catalog.data.gov/api/3/action/package_search"

# Define the filter query for date range
filter_query = "metadata_created:[2011-01-01T00:00:00Z TO 2012-12-31T23:59:59Z]"

# Define the other query parameters
query_params = {
    "q": "covid",  # Replace with your search query
    #"fq": filter_query,
}

response = requests.get(url, params=query_params)

if response.status_code == 200:
    data = response.json()
    results = data["result"]["results"]
    for result in results:
        print(result["title"])
else:
    print(f"Error fetching data. Status code: {response.status_code}")