from flask import Flask

@app.route('/api/hello')
def hello_world():
    return {"message": "Hello from Flask!"}

@app.route('/api/time')
def get_time():
    import time
    return {"time": time.time()}

