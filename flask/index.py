from flask import Flask, Response
from flask import request, render_template, session
import database as db
import json

app=Flask(__name__)

@app.route('/getrepos/<username>', methods=['GET'])
def getrepos(username):
    return json.dumps(db.get_repos_for_user(username))

@app.route('/getdata/<username>', methods=['GET'])
def getdata(username):
    return json.dumps(db.get_userdata(username))

@app.route('/makerepos', methods=['POST'])
def makerepos():
    return json.dumps(db.insert_repos(request.json))





if __name__=="__main__":
    app.run(debug=True)
