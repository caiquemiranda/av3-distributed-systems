from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/api/message")
async def get_message():
    return JSONResponse(content={"message": "Olá do servidor FastAPI!"})
