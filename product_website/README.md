# Product Website Starter (JupyterHub‑friendly)

This is a lightweight, static product landing page you can open directly from JupyterHub or serve locally.

## Option A — Open the HTML file directly
1. In JupyterHub’s file browser, navigate to `product_website/`.
2. Click `index.html`. Most JupyterHub setups open it in a new browser tab.

## Option B — Serve with a simple local server
In a notebook cell, run:
```python
import os
os.chdir('product_website')
import http.server, socketserver, threading, webbrowser
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(('', PORT), Handler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()
webbrowser.open(f'http://127.0.0.1:{PORT}/index.html')
print('Serving on', f'http://127.0.0.1:{PORT}/index.html')
```
Stop the server by restarting the kernel.

## Option C — Voilà (turn a notebook into a web app)
- Install (if allowed by your JupyterHub): `pip install voila`
- Then from a terminal or cell: `voila your_notebook.ipynb`
- Voilà serves the notebook as a clean web app (no code cells).

## Option D — Export to static HTML
- Use `File → Download as → HTML` (or `nbconvert`) to export content into an HTML file that you can link to from this page.

### Customize
Edit `index.html`, `styles.css`, and `app.js`. Replace `assets/logo.svg` with your brand mark. The page is fully client‑side and deployable to any static host later (GitHub Pages, Netlify, etc.).
