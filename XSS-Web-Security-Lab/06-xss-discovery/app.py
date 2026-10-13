from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():

    search = request.args.get("search", "")

    username = request.form.get("username", "")
    message = request.form.get("message", "")

    return render_template(
        "index.html",
        search=search,
        username=username,
        message=message
    )


if __name__ == "__main__":
    app.run(debug=True, port=5004)