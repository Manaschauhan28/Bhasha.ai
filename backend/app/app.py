from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from spello.model import SpellCorrectionModel


app = FastAPI()
sp = SpellCorrectionModel(language='hi')

sp.load("model/model.pkl")

origins = [
    "http://localhost:3000",
    "localhost:3000",
]



class InputText(BaseModel):
  text: str



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=['root'])
def main():
    return {"message":"Welcome to react app"}


@app.post("/check")
def check(data : InputText):
    ans = sp.spell_correct(data)
    print(ans['spell_corrected_text'][5:])
    return (ans['spell_corrected_text'][6:])
