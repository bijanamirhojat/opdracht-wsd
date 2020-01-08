import mysql.connector
import json

def connection():
    return mysql.connector.connect(
        host = 'localhost',
        user = 'docent',
        passwd = 'hoppekee',
        database = 'opdracht',
        charset = 'utf8',
    )

def get_repos_for_user(nickname):
    conn = connection()
    cursor = conn.cursor(dictionary=True)
    sql = "select repoName,programmingLanguage,description,stars,forks from repos join users on users.id=repos.user_id where username=%s"
    result = cursor.execute(sql,(nickname,))
    return list(cursor)


def get_userdata(nickname):
    conn = connection()
    cursor = conn.cursor(dictionary=True)
    sql = "select username,name,avatar from users where username=%s"
    result = cursor.execute(sql, (nickname,))
    return list(cursor)

def insert_repos(data):
    check = len((getUserData(data['persondata']['username'])))
    if (check > 0):
        return {}

    conn = connection()
    cursor = conn.cursor()
    userdata = data['persondata']
    sql = "insert into users(username,name,avatar) values (%s, %s, %s)"
    cursor.execute(sql, (userdata['username'], userdata['name'], userdata['avatar']))
    conn.commit() 
    id = cursor.lastrowid

    tmp = [(r['repoName'], r['programmingLanguage'], r['description'], r.get('stars','0'), r.get('forks','0')) 
        for r in data['repos']]
    repos = [(id, *r) for r in tmp]
    sql = "insert into repos(user_id,reponame,programmingLanguage,description,stars,forks) values (%s,%s,%s,%s,%s,%s)" 
    cursor.executemany(sql,repos)
    conn.commit()

    return {'id':id, 'aantal_repos':cursor.rowcount}

#data = {"repos":[{"forks":"1","repoName":"hub","programmingLanguage":"","description":""},{"repoName":"MyBlog","programmingLanguage":"PHP","description":"Blog application for final year examination"},{"repoName":"MonoordPC","programmingLanguage":"PHP","description":"PC Team Development Enviroment"},{"repoName":"syntaxError","programmingLanguage":"PHP","description":""},{"repoName":"LaravelCommands4Beginners-HandyGithubStuff","programmingLanguage":"","description":"A basic guideline for setting up Laravel on a windows machine + some basic instructions"},{"repoName":"Sware","programmingLanguage":"PHP","description":"Development files for sware project"},{"repoName":"FeudalJapan","programmingLanguage":"PHP","description":"Development source code for Feudal Japan project"},{"repoName":"HelloWorldRepository","programmingLanguage":"Java","description":""},{"repoName":"AndroidHandyStuff","programmingLanguage":"","description":""},{"repoName":"JavaScript-Wakken-IjsBeren","programmingLanguage":"JavaScript","description":"Sharing is caring"}],"persondata":{"avatar":"https://avatars0.githubusercontent.com/u/24603187?s\u003d88\u0026v\u003d4","username":"JustinBoxemDEV","repoCount":"10","name":"Justin Boxem"}}

#print (insertRepos(data))
