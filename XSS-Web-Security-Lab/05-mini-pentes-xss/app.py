from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():

    search = request.args.get("search", "")
    username = request.form.get("username", "")
    comment = request.form.get("comment", "")

    return render_template(
        "index.html",
        search=search,
        username=username,
        comment=comment
    )


if __name__ == "__main__":
    app.run(debug=True, port=5003)