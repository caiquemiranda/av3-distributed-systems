from fastapi import FastAPI

app = FastAPI()


@app.get("/api/message")
async def read_message():
    return {"message": "Olá do Servidor REST com FastAPI!"}
