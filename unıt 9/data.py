import sqlite3


db="roj.db"

def init():
    connection=sqlite3.connect(db)
    cursor=connection.cursor()
    cursor.execute("""CREATE TABLE users(
                    id INTEGER PRIMARY KEY,
                    username TEXT NOT NULL,
                    password TEXT NOT NULL)""")
    cursor.execute("""CREATE TABLE todos(
                    id INTEGER PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    content TEXT NOT NULL)""")
    connection.commit()
    connection.close()

def add_todo(user,code):
    connection=sqlite3.connect(db)
    connection.execute(f"INSERT INTO todos (user_id,content) VALUES ('{user}','{code}')")
    connection.commit()
    connection.close()

def get_todo():
    connection=sqlite3.connect(db)
    gtd=connection.execute("SELECT id,content FROM todos ORDER BY id").fetchall() 
    connection.close()
    return gtd




if __name__=="__main__":
    init()
