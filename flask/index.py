from flask import Flask, Response
from flask import request, render_template, session
from flask_cors import CORS, cross_origin
import database as db
import json

app=Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/getrepos/<username>', methods=['GET'])
def getrepos(username):
    result = db.get_repos_for_user(username)
    if not result :
        resp = Response("ERROR 404, page not found")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 404
    else:
        resp = Response(json.dumps(result))
        resp.headers['Content-Type']='application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 200

@app.route('/getdata/<username>', methods=['GET'])
def getdata(username):
    result = db.get_userdata(username)
    if not result :
        resp = Response("ERROR 404, page not found")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 404
    else:
        return json.dumps(result)

@app.route('/makerepos', methods=['OPTIONS'])
def preflight():
    resp = Response()
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    resp.headers['Access-Control-Allow-Methods'] = 'POST'
    return resp, 200

@app.route('/makerepos', methods=['POST'])
def makerepos():
    response = Response()
    response.headers['Content-Type'] = 'application/json'
    response.headers['Access-Control-Allow-Origin'] = '*'

    try:
        result = db.insert_repos(request.json)
    except DataError as ex:
        response.data = json.dumps(ex.msg)
        return response, 400

    if len(result) == 0:
        username = request.json['persondata']['username']
        response.headers['Location'] = "http://localhost:5000/getrepos/{}".format(username)
        return response, 303

    response.data = json.dumps(result)
    return response, 200

@app.route('/getall/<username>', methods=['GET'])
def getall(username):
    result = db.get_all_data(username)
    if result == 0 :
        resp = Response("")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 404
    else:
        resp = Response(json.dumps(result))
        resp.headers['Content-Type']='application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp, 200


if __name__=="__main__":
    app.run(debug=True)
