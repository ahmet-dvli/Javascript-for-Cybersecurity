from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)


def get_db():
    conn = sqlite3.connect("comments.db")
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()

    conn.execute("""
        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            comment TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


@app.route("/", methods=["GET", "POST"])
def index():

    if request.method == "POST":
        username = request.form["username"]
        comment = request.form["comment"]

        conn = get_db()

        conn.execute(
            "INSERT INTO comments (username, comment) VALUES (?, ?)",
            (username, comment)
        )

        conn.commit()
        conn.close()

        return redirect("/")

    conn = get_db()
    comments = conn.execute(
        "SELECT username, comment FROM comments"
    ).fetchall()

    conn.close()

    return render_template("index.html", comments=comments)


if __name__ == "__main__":
    init_db()
    app.run(debug=True)