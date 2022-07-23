import random
import json
import pickle
import numpy as np
import nltk

from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import Sequential
from tesorflow.keras.layers import Dense, Activation, Dropout
from tensorflow.keras.optimizers import SGD

lemat = WordNetLemmatizer

intents = json.loads(open("intents.json").read())

words = []
classes = []
docs = [] 
ignore_letters = ['?', '.', ',', '!']

for intent in intents["intents"]:
    for pattern in intent["patterns"]:
        



