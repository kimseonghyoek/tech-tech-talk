from urllib.request import urlopen
from bs4 import BeautifulSoup
from collections import OrderedDict


html = urlopen("https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid1=105&sid2=230")
bsObject  = BeautifulSoup(html, "html.parser")

newsTitle = []

for i in range(1, 11):
    newsTitle.append(bsObject.select('#main_content > div.list_body.newsflash_body > ul.type06_headline > li:nth-child('+str(i)+') > dl > dt:nth-child(2) > a'))

print(newsTitle)