from flask import Flask, render_template, request, redirect,session
import data 

app=Flask(__name__)
app.secret_key="hello world"

@app.route("/")
def index():
    todos=data.get_todo()
    print(todos)
    return render_template("index.html", todos=todos , user=session.get("user"))


@app.route("/add" , methods=["POST"])
def add():
    job=request.form.get("roj")
    data.add_todo(1,job)
    return redirect("/")


@app.route("/del/<id>", methods=["POST"])
def delete(id):
    data.del_todo(int(id))
    return redirect("/")

@app.route("/login", methods=["POST", "GET"] )
def login():
    if request.method=="GET":
        return render_template("login.html" , user=session.get("user"))
    elif request.method=="POST":
        name=request.form.get("username")
        security=request.form.get("password")
        nmn=data.check_user(name,security)
        if nmn:
            session["user"]=nmn
            return redirect("/")
        else:
            return render_template("login.html")



@app.route("/register", methods=["POST", "GET"] )
def register():
    if request.method=="GET":
        return render_template("register.html" , user=session.get("user"))
    elif request.method=="POST":
        name=request.form.get("username")
        security=request.form.get("password")
        data.add_user(name,security)
        return redirect("/")

@app.route("/logout" )
def logout():
    session.clear()
    return redirect("/")



if __name__ == "__main__":
    app.run(debug=True)

    