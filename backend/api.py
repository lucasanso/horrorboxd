from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import psycopg2
from pydantic import BaseModel
# from jose import jwt
from datetime import datetime, timedelta
import yaml

# try:
#     with open("config.yaml", "r") as file:
#         configs = yaml.safe_load(file)


# except Exception as e:
#     print(f"[ERRO] {e}")

app = FastAPI()

# Estudar esse CORS pra ontem
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permite qualquer origem (em produção, coloque o seu domínio)
    allow_credentials=True,
    allow_methods=["*"], # Permite todos os métodos (GET, POST, etc)
    allow_headers=["*"], # Permite todos os headers
)

# def criar_token(dados: dict):
#     dados_copia = dados.copy()
#     expiracao = datetime.utcnow() + timedelta(minutes=30)
#     dados_copia.update({"exp": expiracao})
    
#     # Gera a "pulseira" assinada
#     token_jwt = jwt.encode(dados_copia, configs['configs']['private_key'], algorithm=configs['configs']['algorithm'])

#     return token_jwt

# def connect_to_psql():
#     connection = psycopg2.connect(
#         database=configs["postgres"]["database"],
#         host=configs["postgres"]["host"],
#         user=configs["postgres"]["user"],
#         password=configs["postgres"]["password"]
#     )

#     print("[SUCESSO] Conexão com o banco de dados foi realizada com sucesso")
    
#     return connection

def desconnect_psql(connection):
    if connection:
        print("[PROCESSO] Desconectando do banco de dados")

        connection.close()

        print("[SUCESSO] Banco desconectado com sucesso")

@app.get("/imdb")
def getMovies():
    
    df = pd.read_json('../misc/scraping/imdb_movies.json')

    # Anotar essa parada aqui, tava retornando coisa errada via API!
    return df.to_dict(orient='records')

class Usuario(BaseModel):
    username: str
    passw: str

# @app.post("/login")
# def login(usuario: Usuario):
#     connection = None
#     try:
#         connection = connect_to_psql()
#         cursor = connection.cursor()

#         query = "SELECT username, passw FROM users WHERE username = %s;"
#         cursor.execute(query, (usuario.login,))
#         user_found = cursor.fetchone()

#         if user_found:
#             db_login, db_password = user_found
#             if db_password == usuario.senha:
#                 token = criar_token(dados={"sub": db_login})
#                 return {"access_token": token, "token_type": "bearer"}
#     # Se chegou aqui, as credenciais estão erradas
#         raise HTTPException(status_code=401, detail="Login ou senha incorretos")

#     except HTTPException as http_e:
#         # Se for erro de login, relança para o FastAPI responder 401
#         raise http_e
#     except Exception as e:
#         print(f"[ERRO LOGIN] {e}")
#         # Erro de banco/código, retorna 500
#         raise HTTPException(status_code=500, detail="Erro interno no servidor")
#     finally:
#         if connection:
#             desconnect_psql(connection)