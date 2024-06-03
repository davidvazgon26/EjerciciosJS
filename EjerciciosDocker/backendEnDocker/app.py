import json
from flask import Flask
app = Flask(__name__)

@app.router('/getMyInfo')
def getMyInfo():
    value = {
        "name": "David",
        "lastname": "Vazquez",
        "socialMedia":
        [
            "facebookUser":"UnoGood",
            "InstagramUser":"I Haven't",
            "linkedin":"d-vazquez"
            "githubUser":"davidvazgon26"
        ],
        "blog":"https://nomeacuerdo.com",
        "author": "Yo merangas"
    }

    return json.dumps(value)