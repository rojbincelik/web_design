from flask import Flask,render_template,request,jsonify


app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/newroute", methods=["POST"])
def new_route():
    data=request.get_json()
    name=data.get("name")
    email=data.get("email")
    message=data.get("message")
    return jsonify({"status":"success", "name":name })


if __name__=="__main__":
    app.run()

