from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    search = request.args.get("search", "")
    return render_template("index.html", search=search)


if __name__ == "__main__":
    app.run(debug=True, port=5002)