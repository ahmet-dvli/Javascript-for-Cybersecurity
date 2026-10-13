# XSS Web Security Lab

A hands-on web security project focused on understanding, identifying, exploiting, and fixing Cross-Site Scripting (XSS) vulnerabilities in a controlled local environment.

## Objectives

- Understand reflected, stored, and DOM-based XSS.
- Analyze user input and how it flows into HTML contexts.
- Identify unsafe output handling and injection points.
- Understand the impact of unsafe HTML rendering and URL handling.
- Apply security fixes and retest vulnerable behavior.

## Labs

| Lab | Topic |
|---|---|
| 01 | DOM-based XSS |
| 02 | Stored XSS |
| 03 | Reflected XSS |
| 04 | XSS in HTML attribute context |
| 05 | Mini penetration testing exercise |
| 06 | XSS discovery challenge: unsafe URL handling |

## Methodology

**Identify → Analyze → Test → Understand Root Cause → Fix → Retest**

The goal is not only to demonstrate vulnerabilities, but also to understand why they occur and how to prevent them.

## Technologies

- Python
- Flask
- HTML
- JavaScript
- SQLite
- Jinja2 templating

## Running the Labs

Some labs use Flask and require Python 3.

1. Open the relevant lab directory.
2. Create and activate a Python virtual environment.
3. Install the dependencies required by that lab.
4. Run the application locally and visit the address shown in the terminal.

Check each lab's files for its specific setup requirements.

## Security Notice

This project is intended for educational use in a controlled local environment. Do not expose intentionally vulnerable applications to the public internet or test systems without authorization.

## Disclaimer

This repository documents hands-on learning and defensive web security practice. It is not a claim of professional penetration-testing experience.