from flask import Flask,render_template,redirect,url_for ,request
from data import DB_Manager 

app=Flask(__name__)
db_manager=DB_Manager("roj.db")

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/roj")
def roj():
    return  render_template("roj.html")

@app.route("/login",methods=["POST"])
def login():
    username=request.form.get("username")
    password=request.form.get("password")
    result=db_manager.get_user(username,password)
    if result:
        return redirect("/roj")
    else:
        return redirect("/")

@app.route("/register",methods=["POST","GET"])
def register():
    if request.method=="GET":
        return render_template("register.html")
    else:
        username=request.form.get("username")
        password=request.form.get("password")
        db_manager.add_user(username,password)
        return redirect("/")

app.run()