from urllib.request import urlopen
from bs4 import BeautifulSoup
from collections import OrderedDict


html = urlopen("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105")
bsObject  = BeautifulSoup(html, "html.parser")
newsData = OrderedDict();

newsList = bsObject.find('ul', class_ = "sh_list")
newsItem = newsList.find('li', class_ = "sh_item")

headlineNews = bsObject.find('a', class_ = "sh_text_headline")

print(newsList)