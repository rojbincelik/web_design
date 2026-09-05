import sqlite3
class DB_Manager:
    def __init__(self,database):
        self.database=database

    def create_tables(self):
        connection=sqlite3.connect(self.database)
        with connection:
            connection.execute("""CREATE TABLE user(
                                id INTEGER PRIMARY KEY,
                                username TEXT NOT NULL,
                                password TEXT NOT NULL )""")
            connection.commit()

    def add_user(self,username,password):
        connection=sqlite3.connect(self.database)
        with connection:
            sql="INSERT INTO user(username,password) values(?,?)"
            connection.execute(sql,(username,password))
    def get_user(self,username,password):
        connection=sqlite3.connect(self.database)
        with connection:
            sql="SELECT username,password FROM user WHERE username=? AND password=?"
            cursor=connection.cursor()
            cursor.execute(sql,(username,password))
            return cursor.fetchall()




if __name__=="__main__":
    db_manager=DB_Manager("roj.db")
    db_manager.create_tables()
