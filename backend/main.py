from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from search_func import search_query, get_data_by_id

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/search")
async def search(query: str ,skip: int = 0, limit: int = 10, location: str = None, start_time: str = None, end_time: str = None):
    # return data from search_query(query, skip, limit, start_time, end_time)
    try:
        data = await search_query(query, skip, limit, location, start_time, end_time)
    except:
        return {'message': 'Server error'}
    else:
        return data
    
@app.get("/search/{id}")
async def search_by_id(id: str):
    # return data from get_data_by_id(id)
    try:
        data = await get_data_by_id(id)
    except:
        return {'message': 'Server error'}     
    else:
        return data
