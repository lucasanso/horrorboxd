import requests
from bs4 import BeautifulSoup
import pandas as pd
import re
from playwright.async_api import async_playwright
import asyncio

URL_TARGET_IMBD = f"https://www.imdb.com/pt/list/ls093910272/?sort=user_rating%2Cdesc"
URL_TARGET_ROTTEN = f"https://editorial.rottentomatoes.com/guide/best-horror-movies-of-all-time/"

class CrawlMovies():
    def __init__(self):
        print("[PROCESSO] Iniciando obtenção de filmes.")
        
        # Estudar sobre headers (o que são) e proxies -> relação com o scrapy e utilização com o playwright.
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        }

        self.urls = [URL_TARGET_IMBD, URL_TARGET_ROTTEN]
        print(self.urls)

    def start_request(self, url: str) -> BeautifulSoup:
        """
        Faz a requisição de uma URL e retorna o HTML parseado em bs4.

        Args:
            url: URL desejada.
        
        Returns:
            BeaulifulSoup: HTML parseado.
        """
        try:
            response = requests.get(url, headers=self.headers)

            data = BeautifulSoup(response.text, "html.parser")

            return data
        
        except Exception as e:
            print(f"[ERRO] {e}")

    def parse_imdb(self) -> list:     
        """
        Extrai as informações do HTML parseado do IMDB.

        Returns:
            list: Retorna uma lista contendo uma lista de dicionários contendo informações dos filmes.
        """
        count = 0
        movies = []
        for url in self.urls:
            if re.findall(r'imdb.com', url):
                data = self.start_request(url)

            for url in data.select('.ipc-metadata-list-summary-item'):
                if count != 4:
                    info = {
                            "title" :   url.select_one('h3').text,
                            "img" : url.select_one('img')['src'],
                            "rating" : url.select_one('.ipc-rating-star--rating').text
                        }

                    movies.append(info)
                    
                    count += 1

        print("Filmes obtidos do IMDB")
        
        df = pd.DataFrame(movies)
        df.to_json('imdb_movies.json', orient='records', indent=4, force_ascii=False)

    # Tem problema de Shadow DOM aqui para evitar de raspar dados, só dá com Playwright...
    # Experiência de lidar com Shadow DOM positiva aqui.
    def parse_rotten(self):
        """
        Extrai as informações do HTML parseado do Rotten Tomatoes.

        Returns:
            list: Retorna uma lista contendo uma lista de dicionários contendo informações dos filmes.
        """

        new_urls = []

        for url in self.urls:
            if re.findall(r'rotten', url):
                data = self.start_request(url)

                for url in data.select('.meta-title'):
                    new_urls.append(url['href'])
            else:
                continue
    
        
        return new_urls

if __name__ == "__main__":
    executar = CrawlMovies()

    executar.parse_imdb()
