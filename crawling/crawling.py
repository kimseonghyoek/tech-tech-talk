from urllib.request import urlopen
from bs4 import BeautifulSoup

htoml = urlopen("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105")
bsObject  = BeautifulSoup(html, "html.parser")

print(bsObject)