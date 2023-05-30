# 네이버 IT일반 뉴스 크롤링
from urllib.request import urlopen
from bs4 import BeautifulSoup
from collections import OrderedDict
import requests
import json
from pathlib import Path
import os

html = urlopen("https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid1=105&sid2=230")
bs_object  = BeautifulSoup(html, "html.parser")
dir_news_link = Path("./link.json")
dir_title = Path("./HeadLine.json")


news_link = []

with open('./link.json', 'a+', encoding='UTF-8') as make_file:
    for i in range(1, 11):
        news_link.append(bs_object.select('#main_content > div.list_body.newsflash_body > ul.type06_headline > li:nth-child('+str(i)+') > dl > dt:nth-child(2) > a')[0].attrs['href'])
    if dir_news_link.exists() :
        os.remove('./link.json')
    else: json.dump(news_link, make_file, ensure_ascii=False)     

title_list = []

with open('./Headline.json', 'a+', encoding='UTF-8') as make_file:
    for link in news_link:
        header = {"user-agent": "Mozilla/5.0"}

        html = requests.get(link, headers=header)
        soup = BeautifulSoup(html.text, 'html.parser')    

        title = soup.find('h2', {'id': 'title_area'}).text
        title_list.append(title)
        if dir_title.exists() :
            print('adsfasdf')
    json.dump(title_list, make_file, ensure_ascii=False)