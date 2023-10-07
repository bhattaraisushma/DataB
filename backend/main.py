from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from search_func import search_query

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
async def search(query: str ,skip: int = 0, limit: int = 10):
    return search_query(query=query, skip=skip, limit=limit)