from spello.model import SpellCorrectionModel

sp = SpellCorrectionModel(language='hi')
with open("data.txt","r") as file:
    data = file.readlines()

data = [i.strip() for i in data]
sp.train(data)

sp.save("/Users/fb/Documents/BhashaSafai/Bhasa.ai/backend")