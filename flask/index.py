from flask import Flask, Response
from flask import request, render_template, session
from data import github_repos
import json

app=Flask(__name__)

@app.route('/getrepos/<username>')
def getrepos(username):
    output = [x for x in github_repos if x['persondata']['username']==username]
    if len(output)==0 :
        resp = Response('')
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 404

    else:
        resp = Response(json.dumps(output))
        resp.headers['Content-Type']='application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 200

if __name__=="__main__":
    app.run(debug=True)
