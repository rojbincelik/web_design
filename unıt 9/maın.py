from flask import Flask, render_template, request, redirect
import data 

app=Flask(__name__)

@app.route("/")
def index():
    todos=data.get_todo()
    print(todos)
    return render_template("index.html", todos=todos)

@app.route("/add" , methods=["POST"])
def add():
    job=request.form.get("roj")
    data.add_todo(1,job)
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)

    