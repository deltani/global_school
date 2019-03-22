"""
This file generates mockup data
"""
import json
import numpy as np

path_names = "names/random-name/first-names.json"
path_surnames = "names/random-name/names.json"
path_places = "names/random-name/places.json"

with open(path_names) as f:
    all_names = json.load(f)

with open(path_surnames) as f:
    all_surnames = json.load(f)

with open(path_places) as f:
    all_address = json.load(f)

np.random()


